#!/bin/bash

# Script to create i18n-compatible implement pages
# This script copies files from src/app/implement to src/app/[locale]/implement
# and applies i18n modifications

set -e

BASE_DIR="/var/www/aicomply/ai-act-platform"
SRC_DIR="$BASE_DIR/src/app/implement"
DEST_DIR="$BASE_DIR/src/app/[locale]/implement"

echo "Creating i18n-compatible implement pages..."
echo "Source: $SRC_DIR"
echo "Destination: $DEST_DIR"

# Function to add i18n imports and locale handling
add_i18n_support() {
    local file=$1
    local has_params=$2

    # Create temp file
    local tmp_file=$(mktemp)

    # Check if file uses Link from next/link
    if grep -q 'from "next/link"' "$file"; then
        # Add LocalizedLink import after next/link import
        sed '/from "next\/link"/a\
import { LocalizedLink } from "@/components/localized-link"' "$file" > "$tmp_file"
        mv "$tmp_file" "$file"
    else
        # Add both imports at the top after other imports
        sed '/^import/a\
import { LocalizedLink } from "@/components/localized-link"' "$file" > "$tmp_file"
        mv "$tmp_file" "$file"
    fi

    # Add i18n config import
    sed '/^import.*$/a\
import { isValidLocale, defaultLocale } from "@/i18n/config"' "$file" > "$tmp_file"
    mv "$tmp_file" "$file"

    # Replace Link with LocalizedLink for internal links (not external/downloads)
    sed -i 's/<Link href="\//LocalizedLink href="\//g' "$file"
    sed -i 's/<\/Link>/<\/LocalizedLink>/g' "$file"

    # Restore external links (keep them as Link)
    sed -i 's/<LocalizedLink href="http/<Link href="http/g' "$file"
    sed -i 's/<LocalizedLink href="\/templates/<Link href="\/templates/g' "$file"
    sed -i 's/<LocalizedLink href="\/resources/<Link href="\/resources/g' "$file"

    echo "✓ Added i18n support to $(basename $file)"
}

# Copy and modify main page
echo "Processing main implement page..."
cp "$SRC_DIR/page.tsx" "$DEST_DIR/page.tsx"
# Modify params type - this needs manual editing due to complexity

# Copy and modify policies pages
echo "Processing policies pages..."
mkdir -p "$DEST_DIR/policies/[id]"
cp "$SRC_DIR/policies/page.tsx" "$DEST_DIR/policies/page.tsx"
cp "$SRC_DIR/policies/[id]/page.tsx" "$DEST_DIR/policies/[id]/page.tsx"
cp "$SRC_DIR/policies/loading.tsx" "$DEST_DIR/policies/loading.tsx"

# Copy and modify standards pages
echo "Processing standards pages..."
mkdir -p "$DEST_DIR/standards/[id]"
cp "$SRC_DIR/standards/page.tsx" "$DEST_DIR/standards/page.tsx"
cp "$SRC_DIR/standards/[id]/page.tsx" "$DEST_DIR/standards/[id]/page.tsx"

# Copy and modify controls pages
echo "Processing controls pages..."
mkdir -p "$DEST_DIR/controls/[controlId]"
cp "$SRC_DIR/controls/page.tsx" "$DEST_DIR/controls/page.tsx"
cp "$SRC_DIR/controls/[controlId]/page.tsx" "$DEST_DIR/controls/[controlId]/page.tsx"

# Copy and modify procedures pages
echo "Processing procedures pages..."
mkdir -p "$DEST_DIR/procedures/[id]"
cp "$SRC_DIR/procedures/page.tsx" "$DEST_DIR/procedures/page.tsx"
cp "$SRC_DIR/procedures/[id]/page.tsx" "$DEST_DIR/procedures/[id]/page.tsx"
cp "$SRC_DIR/procedures/loading.tsx" "$DEST_DIR/procedures/loading.tsx"

# Copy and modify templates pages
echo "Processing templates pages..."
mkdir -p "$DEST_DIR/templates"
cp "$SRC_DIR/templates/page.tsx" "$DEST_DIR/templates/page.tsx"
cp "$SRC_DIR/templates/loading.tsx" "$DEST_DIR/templates/loading.tsx"

echo ""
echo "✓ Directory structure created successfully"
echo ""
echo "IMPORTANT: Manual steps required:"
echo "1. Update params types in each page.tsx to include locale"
echo "2. Add locale extraction at the top of each page component"
echo "3. Review and test all pages"
echo ""
echo "See I18N_IMPLEMENT_MIGRATION.md for detailed instructions"
