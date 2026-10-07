#!/usr/bin/env bash
# commit-workflow.sh - Auto commit + push with conventional messages
# Place in .opencode/skills/commit-workflow/ and make executable

set -euo pipefail

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() { echo -e "${BLUE}ℹ️  $1${NC}"; }
success() { echo -e "${GREEN}✅ $1${NC}"; }
warn() { echo -e "${YELLOW}⚠️  $1${NC}"; }
error() { echo -e "${RED}❌ $1${NC}"; exit 1; }

# Check we're in a git repo
git rev-parse --git-dir > /dev/null 2>&1 || error "Not a git repository"

# Check for changes
if [[ -z $(git status --porcelain) ]]; then
    warn "No changes to commit"
    exit 0
fi

# Get list of changed files
changed_files=$(git status --porcelain | awk '{print $2}')

# Auto-detect commit type and scope
detect_type_and_scope() {
    local type="chore"
    local scope=""
    local description=""

    # Check for feat patterns
    if echo "$changed_files" | grep -qE '^src/features/([^/]+)/components/'; then
        type="feat"
        scope=$(echo "$changed_files" | grep -oE 'src/features/([^/]+)/components/' | head -1 | sed 's|src/features/\([^/]*\)/components/|\1|')
        description="update $(basename $(echo "$changed_files" | grep "src/features/$scope/components/" | head -1)) component"
    elif echo "$changed_files" | grep -qE '^src/shared/components/'; then
        type="feat"
        scope=$(echo "$changed_files" | grep -oE 'src/shared/components/[^/]+' | head -1 | sed 's|src/shared/components/||')
        description="update $scope component"
    elif echo "$changed_files" | grep -qE '^src/shared/hooks/'; then
        type="feat"
        scope=$(echo "$changed_files" | grep -oE 'src/shared/hooks/[^/]+' | head -1 | sed 's|src/shared/hooks/||' | sed 's|\.ts$||')
        description="add $scope hook"
    elif echo "$changed_files" | grep -qE '^src/styles/'; then
        type="style"
        description="update styles"
    elif echo "$changed_files" | grep -qE '(\.md$|^docs/)'; then
        type="docs"
        description="update documentation"
    elif echo "$changed_files" | grep -qE '(index\.html|vite\.config|tsconfig|\.eslintrc|\.prettierrc)'; then
        type="chore"
        scope="config"
        description="update config"
    elif echo "$changed_files" | grep -qE '(package\.json|pnpm-lock\.yaml|yarn\.lock)'; then
        type="chore"
        scope="deps"
        description="update dependencies"
    elif echo "$changed_files" | grep -qE '(test|spec)\.(ts|tsx|js|jsx)$'; then
        type="test"
        description="update tests"
    fi

    # Check diff for fix patterns
    if git diff --cached --name-only 2>/dev/null | xargs git diff --cached 2>/dev/null | grep -qiE '(fix|bug|patch|hotfix)'; then
        type="fix"
    fi

    # If no description yet, use generic
    if [[ -z "$description" ]]; then
        description="update $(echo "$changed_files" | head -1 | xargs basename)"
    fi

    echo "$type|$scope|$description"
}

# Get detection result
IFS='|' read -r commit_type commit_scope commit_desc <<< "$(detect_type_and_scope)"

# Build commit message
if [[ -n "$commit_scope" ]]; then
    commit_msg="${commit_type}(${commit_scope}): ${commit_desc}"
else
    commit_msg="${commit_type}: ${commit_desc}"
fi

log "Analyzing changes..."
echo -e "  Files: $(echo "$changed_files" | tr '\n' ' ')"
log "Detected: ${commit_msg}"

# Stage all changes
git add -A

# Commit
commit_hash=$(git commit -m "$commit_msg" --no-verify 2>&1 | grep -oE '[a-f0-9]{7,}' | head -1 || echo "unknown")
success "Commit created: ${commit_hash}"

# Get current branch
branch=$(git branch --show-current)

# Push
log "Pushing to origin/${branch}..."
git push origin "$branch" --no-verify

success "Done! Pushed to origin/${branch}"
