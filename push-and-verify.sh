#!/bin/bash
# Push and verify script for fabletech repository

echo "🔄 Starting push and verify..."

# Check if there are changes to push
if git diff --quiet HEAD origin/main && git diff --quiet HEAD fabletech/main; then
  echo "✅ No changes to push"
  exit 0
fi

# Push to both remotes
echo "📤 Pushing to origin/main..."
git push origin main

echo "📤 Pushing to fabletech/main..."
git push fabletech main

# Fetch latest from remotes
echo "🔍 Fetching latest from remotes..."
git fetch origin
git fetch fabletech

# Verify sync status
echo -e "\n📊 Verification results:"
echo -e "----------------------------------------"

# Check origin
if git diff --quiet HEAD origin/main; then
  echo "✅ origin/main is synced"
else
  echo "❌ origin/main is NOT synced!"
  git log --oneline origin/main..HEAD
fi

# Check fabletech
if git diff --quiet HEAD fabletech/main; then
  echo "✅ fabletech/main is synced"
else
  echo "❌ fabletech/main is NOT synced!"
  git log --oneline fabletech/main..HEAD
fi

echo -e "\n📜 Latest commits:"
echo -e "----------------------------------------"
git log --oneline -5 --graph --decorate

echo -e "\n✅ Push and verify complete!"
