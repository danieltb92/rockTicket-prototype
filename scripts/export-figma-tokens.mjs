#!/usr/bin/env node

/**
 * Export design tokens from Figma via REST API.
 *
 * Usage:
 *   $env:FIGMA_TOKEN="figd_xxx"; $env:FIGMA_FILE_KEY="xxx"; node scripts/export-figma-tokens.mjs
 *
 * Output: design/tokens.json
 *
 * Filters out noise (numbered layers, duplicate values, unused fonts)
 * and keeps only meaningful design tokens.
 */

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) {
  console.error("Error: FIGMA_TOKEN and FIGMA_FILE_KEY environment variables are required.");
  console.error('Usage: FIGMA_TOKEN=figd_xxx FIGMA_FILE_KEY=xxx node scripts/export-figma-tokens.mjs');
  process.exit(1);
}

const API_BASE = "https://api.figma.com/v1";

// App's actual font families (skip decorative fonts like "Libre Barcode")
const APP_FONTS = ["Squada One", "Source Sans Pro", "Inter", "Be Vietnam Pro"];

// Standard spacing scale (multiples of 4px, common UI values)
const STANDARD_SPACING = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128];

async function fetchFigma(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });

  if (!res.ok) {
    throw new Error(`Figma API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

function extractColors(file) {
  const colors = {};
  const seen = new Set();

  function walk(node) {
    // Skip numbered/unnamed layers (likely auto-generated)
    const name = node.name || "";
    const isNumberedLayer = /^\d+$/.test(name);

    if (node.fills && node.fills.length > 0 && !isNumberedLayer) {
      for (const fill of node.fills) {
        if (fill.type === "SOLID" && fill.visible !== false) {
          const { r, g, b } = fill.color;
          const hex = `#${[r, g, b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("")}`;
          const key = `${name}:${hex}`;
          if (!seen.has(key)) {
            seen.add(key);
            colors[name] = hex;
          }
        }
      }
    }
    if (node.children) {
      for (const child of node.children) walk(child);
    }
  }

  walk(file.document);
  return colors;
}

function extractTypography(file) {
  const typography = {};
  const seen = new Set();

  function walk(node) {
    if (node.type === "TEXT" && node.style) {
      const { fontFamily, fontSize, fontWeight, lineHeightPx } = node.style;

      // Only keep fonts used in the app
      if (APP_FONTS.includes(fontFamily)) {
        const key = `${fontFamily}|${fontSize}|${fontWeight}`;
        if (!seen.has(key)) {
          seen.add(key);
          const styleName = `${fontFamily} ${fontSize}px w${fontWeight}`;
          typography[styleName] = {
            fontFamily,
            fontSize: `${fontSize}px`,
            fontWeight: String(fontWeight),
            lineHeight: `${Math.round(lineHeightPx)}px`,
          };
        }
      }
    }
    if (node.children) {
      for (const child of node.children) walk(child);
    }
  }

  walk(file.document);
  return typography;
}

function extractSpacing(file) {
  const rawSpacing = new Set();

  function walk(node) {
    if (node.layoutMode) {
      if (node.paddingLeft) rawSpacing.add(node.paddingLeft);
      if (node.paddingRight) rawSpacing.add(node.paddingRight);
      if (node.paddingTop) rawSpacing.add(node.paddingTop);
      if (node.paddingBottom) rawSpacing.add(node.paddingBottom);
      if (node.itemSpacing) rawSpacing.add(node.itemSpacing);
    }
    if (node.children) {
      for (const child of node.children) walk(child);
    }
  }

  walk(file.document);

  // Map raw values to nearest standard spacing
  const tokens = {};
  const usedStandards = new Set();

  for (const raw of rawSpacing) {
    if (raw <= 0) continue;
    // Find nearest standard spacing value
    const nearest = STANDARD_SPACING.reduce((prev, curr) =>
      Math.abs(curr - raw) < Math.abs(prev - raw) ? curr : prev
    );
    usedStandards.add(nearest);
  }

  const labels = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];
  const sorted = [...usedStandards].sort((a, b) => a - b);

  sorted.forEach((value, i) => {
    const label = labels[i] || `${value}px`;
    tokens[label] = `${value}px`;
  });

  return tokens;
}

async function main() {
  console.log("Fetching Figma file...");
  const file = await fetchFigma(`/files/${FIGMA_FILE_KEY}`);
  console.log(`File: ${file.name}`);

  const tokens = {
    _meta: {
      source: "Figma",
      fileKey: FIGMA_FILE_KEY,
      fileName: file.name,
      exportedAt: new Date().toISOString(),
    },
    colors: extractColors(file),
    typography: extractTypography(file),
    spacing: extractSpacing(file),
  };

  const fs = await import("fs");
  const output = JSON.stringify(tokens, null, 2);
  fs.writeFileSync("design/tokens.json", output);

  console.log(`Exported to design/tokens.json`);
  console.log(`  Colors: ${Object.keys(tokens.colors).length}`);
  console.log(`  Typography: ${Object.keys(tokens.typography).length}`);
  console.log(`  Spacing: ${Object.keys(tokens.spacing).length}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
