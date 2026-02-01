# How to Create Your First AI Agent Skill

> *发布时间: 2026-02-01*

## Why Create Custom Skills?

The skills in our directory are great, but **your workflow is unique**. Maybe you have:

- A proprietary deployment process
- Domain-specific knowledge
- Custom coding standards
- Internal tool integrations

Creating a skill lets you **package your expertise** into something reusable across all AI platforms.

---

## Anatomy of a Skill

Every skill is a directory with this structure:

```
my-awesome-skill/
├── SKILL.md          # Main configuration & documentation
├── scripts/          # Helper scripts (optional)
├── data/             # Static data (optional)
└── assets/           # Images, templates (optional)
```

### The Core: SKILL.md

```markdown
# My Awesome Skill

## What It Does
Brief description of what this skill accomplishes.

## When to Use
When you need to [specific use case].

## How It Works
Technical explanation of the approach.

## Examples
Example prompts or usage patterns.
```

---

## Step-by-Step: Creating a "Code Reviewer" Skill

Let's build a skill that automatically reviews code with your team's standards.

### Step 1: Create the Directory

```bash
mkdir -p code-reviewer
cd code-reviewer
```

### Step 2: Write SKILL.md

```markdown
# Code Reviewer Skill

## What It Does
Performs systematic code reviews following your team's standards.

## When to Use
Before submitting PRs, after major refactoring, or during peer review.

## Standards Checklist

### Code Quality
- [ ] Variable naming follows conventions
- [ ] Functions are small and do one thing
- [ ] No magic numbers or strings
- [ ] Error handling is comprehensive

### Security
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] SQL injection prevention
- [ ] XSS protection

### Performance
- [ ] No N+1 queries
- [ ] Indexes on large tables
- [ ] Caching where appropriate

## Usage

```
You: "Review the authentication module for security issues."

Agent: Uses Code Reviewer skill to systematically check
       against all security criteria.
```

## Customization

Edit the `STANDARDS` section to match your team's rules.
```

### Step 3: Add Helper Scripts (Optional)

Create `scripts/review.sh` for common review tasks:

```bash
#!/bin/bash
# Quick security scan

echo "🔍 Running security checks..."

# Check for common issues
grep -r "password\|api_key\|secret" --include="*.py" --exclude-dir=tests || echo "✅ No secrets found"

# Check for SQL injection patterns
grep -r "SELECT.*FROM.*WHERE.*$variable" --include="*.py" || echo "✅ No SQL injection patterns"

echo "✅ Security scan complete"
```

### Step 4: Test Your Skill

```bash
# Test with Claude Code
claude "Review this function using the Code Reviewer skill"
```

---

## Best Practices for Skill Design

### 1. **Be Specific, Not Generic**

❌ Bad: "Write good code"  
✅ Good: "Check that all API calls have timeout handling"

### 2. **Include Checklists**

Checklists force systematic thinking and prevent missed items.

### 3. **Provide Examples**

Show exactly how the skill should be used.

### 4. **Make It Platform-Avoidant**

Write prompts that work across Claude, Cursor, and Antigravity.

```markdown
## Platform Notes
- Claude Code: Use `skill install ./code-reviewer`
- Cursor: Add to `.cursorrules`
- Antigravity: Place in `skills/` directory
```

### 5. **Version Your Skills**

```
code-reviewer/
├── v1.0/
│   └── SKILL.md
├── v1.1/
│   └── SKILL.md
└── latest -> v1.1
```

---

## Submit Your Skill to Antigravity

1. Fork our [skills-directory repo](https://github.com/bodhi584/skills-directory)
2. Add your skill to the `data/` directory following our format
3. Create a PR with:
   - Your skill's SKILL.md content
   - Metadata (name, description, tags)
   - Demo screenshots (optional)
4. Our team will review and publish

---

## Example Skills to Learn From

| Skill | What to Learn |
|-------|---------------|
| **Skill Creator** | How to structure complex skills |
| **Browser Automation** | How to integrate external tools |
| **Systematic Debugging** | How to create effective checklists |
| **OpenCode Auth** | How to handle OAuth flows |

---

## The Skill Creator Skill

Need help creating skills? Use our **Skill Creator** skill:

```
You: "Help me create a skill for database migration reviews."

Skill Creator: Guides you through the process,
               provides templates, and validates
               your skill structure.
```

---

## What's Next?

1. **Browse** [AntigravitySkills.org](https://www.antigravityskills.org) for inspiration
2. **Identify** a repetitive task in your workflow
3. **Package** it as a skill
4. **Share** it with the community
5. **Iterate** based on feedback

The best skills come from solving your own problems.

---

**Tags:** Tutorial, Skills, Development, AI Agents, Customization
