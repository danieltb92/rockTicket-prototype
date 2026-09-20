#!/usr/bin/env node

/**
 * Export design tokens from Figma via REST API.
 *
 * Usage:
 *   $env:FIGMA_TOKEN="figd_xxx"; $env:FIGMA_FILE_KEY="xxx"; node scripts/export-figma-tokens.mjs
 *
 * Output: design/tokens.json
 */

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) {
  console.error("Error: FIGMA_TOKEN and FIGMA_FILE_KEY environment variables are required.");
  console.error('Usage: FIGMA_TOKEN=figd_xxx FIGMA_FILE_KEY=xxx node scripts/export-figma-tokens.mjs');
  process.exit(1);
}

const API_BASE = "https://api.figma.com/v1";

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

  function walk(node) {
    if (node.fills && node.fills.length > 0) {
      for (const fill of node.fills) {
        if (fill.type === "SOLID" && fill.visible !== false) {
          const { r, g, b } = fill.color;
          const hex = `#${[r, g, b].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("")}`;
          const name = node.name || "unnamed";
          if (!colors[name]) colors[name] = hex;
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

  function walk(node) {
    if (node.type === "TEXT" && node.style) {
      const { fontFamily, fontSize, fontWeight, lineHeightPx } = node.style;
      const name = node.name || "unnamed";
      const key = `${fontFamily} ${fontSize}px w${fontWeight}`;
      if (!typography[key]) {
        typography[key] = {
          fontFamily,
          fontSize: `${fontSize}px`,
          fontWeight: String(fontWeight),
          lineHeight: `${Math.round(lineHeightPx)}px`,
        };
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
  const spacing = new Set();

  function walk(node) {
    if (node.layoutMode) {
      if (node.paddingLeft) spacing.add(node.paddingLeft);
      if (node.paddingRight) spacing.add(node.paddingRight);
      if (node.paddingTop) spacing.add(node.paddingTop);
      if (node.paddingBottom) spacing.add(node.paddingBottom);
      if (node.itemSpacing) spacing.add(node.itemSpacing);
    }
    if (node.children) {
      for (const child of node.children) walk(child);
    }
  }

  walk(file.document);

  const sorted = [...spacing].filter((v) => v > 0).sort((a, b) => a - b);
  const tokens = {};
  const labels = ["xs", "sm", "md", "lg", "xl", "2xl"];

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
