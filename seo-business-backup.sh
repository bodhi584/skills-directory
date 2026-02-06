#!/bin/bash
# SEO-Business Automatic Backup Script
# Backups memory and skills daily at midnight

cd /home/hetzner_server/.openclaw/workspace

# Backup memory files
mkdir -p seo-business/memory
cp MEMORY.md seo-business/
cp -r memory/*.md seo-business/memory/ 2>/dev/null || true

# Backup skills directory
mkdir -p seo-business/skills
cp -r .openclaw/workspace/skills/* seo-business/skills/ 2>/dev/null || true

# Commit and push to GitHub
cd seo-business
git add .
git commit -m "Auto backup: $(date '+%Y-%m-%d %H:%M:%S')" || true
git push origin main

echo "Backup completed at $(date)"