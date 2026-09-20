# Design Directory

Source of truth for rockTicket design system.

## Files

- `tokens.json` - Design tokens (colors, typography, spacing, radius)
- `README.md` - This file

## How to Update Tokens

### Option A: From Figma REST API (recommended)

1. Get your Figma Personal Access Token from Settings > Security
2. Get your file key from the Figma URL (e.g., `WcJoDbYzpm1VH84NmKn8kQ`)
3. Run the export script:

```bash
# Windows PowerShell
$env:FIGMA_TOKEN="figd_xxx"; $env:FIGMA_FILE_KEY="xxx"; node scripts/export-figma-tokens.mjs

# macOS/Linux
FIGMA_TOKEN=figd_xxx FIGMA_FILE_KEY=xxx node scripts/export-figma-tokens.mjs
```

4. Review changes: `git diff design/tokens.json`
5. Update `src/styles/theme.css` if needed

### Option B: Manual update

Edit `design/tokens.json` directly. Use this when:
- Making small color adjustments
- Adding new token categories
- Updating typography specs

## Token Structure

```json
{
  "colors": { "name": "#hex" },
  "typography": {
    "name": {
      "fontFamily": "...",
      "fontSize": "...",
      "fontWeight": "...",
      "lineHeight": "..."
    }
  },
  "spacing": { "label": "px" },
  "radius": { "label": "rem/px" }
}
```

## Syncing with Code

After updating `tokens.json`, check if `src/styles/theme.css` needs changes:

1. Compare color values
2. Update CSS custom properties
3. Test in browser
4. Commit both files together
