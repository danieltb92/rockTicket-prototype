---
name: commit-workflow
description: Use when you want to commit and push changes with a single command using conventional commit messages auto-detected from changed files
---

# commit-workflow

## Overview
One-command commit + push with auto-generated conventional commit messages based on file patterns. No build step, no interaction required.

## When to Use
- Quick commits during development
- Feature branches with frequent small commits
- When you want conventional commits without manual message writing

## Usage

```bash
# From any opencode session in the repo
/skill commit-workflow
# or reference it in conversation: "run commit-workflow"
```

The skill executes: `.opencode/skills/commit-workflow/commit-workflow.sh`

## Auto-Detection Logic

| Files Changed | Type | Scope |
|---------------|------|-------|
| `src/features/*/components/*` | `feat` | feature name |
| `src/shared/components/*` | `feat` | component name |
| `src/shared/hooks/*` | `feat` | hook name |
| `src/styles/*` | `style` | - |
| `*.md`, `docs/*` | `docs` | - |
| `index.html`, `vite.config.*`, `tsconfig.*` | `chore` | config |
| `package.json`, `pnpm-lock.yaml` | `chore` | deps |
| Test files | `test` | - |
| Bug fix patterns in diff | `fix` | inferred |

## Example Output

```bash
$ commit-workflow
🔍 Analyzing changes...
📝 Detected: feat(shared/hooks): add useIsMobile hook for responsive detection
📦 Committing...
✅ Commit created: 62b74d7
🚀 Pushing to origin/feature/figma-sync-system...
✅ Done
```
