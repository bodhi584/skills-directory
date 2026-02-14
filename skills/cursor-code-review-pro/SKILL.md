# Cursor Code Review Pro

## What It Does
Advanced code review skill for Cursor that implements comprehensive code quality checks, security audits, and performance optimization recommendations.

## When to Use
- Before submitting pull requests
- During code refactoring
- When onboarding new team members
- For legacy code modernization

## How It Works
This skill integrates with Cursor's AI capabilities to provide systematic code reviews based on industry best practices and your team's specific coding standards.

### Core Features

#### 1. Code Quality Analysis
- **Complexity Metrics**: Cyclomatic complexity, maintainability index, code duplication
- **Style Compliance**: Enforces consistent coding style across the codebase
- **Documentation Quality**: Checks for proper docstrings, comments, and API documentation
- **Test Coverage**: Identifies untested code paths and suggests test cases

#### 2. Security Auditing
- **Vulnerability Detection**: Identifies common security vulnerabilities (SQL injection, XSS, CSRF)
- **Secret Scanning**: Detects hardcoded credentials, API keys, and sensitive data
- **Dependency Security**: Checks for vulnerable dependencies and suggests updates
- **Authentication/Authorization**: Validates proper security implementation

#### 3. Performance Optimization
- **Bottleneck Identification**: Finds performance-critical code sections
- **Memory Usage Analysis**: Detects memory leaks and inefficient allocations
- **Database Query Optimization**: Analyzes and optimizes database queries
- **Algorithm Efficiency**: Suggests more efficient algorithms and data structures

#### 4. Team-Specific Customization
- **Custom Rule Engine**: Allows teams to define their own review rules
- **Integration with CI/CD**: Seamless integration with existing workflows
- **Progressive Enhancement**: Starts with basic checks and adds complexity over time

## Examples

### Basic Code Review
```
You: "Review this Python function for security issues and performance problems."

Cursor Code Review Pro: 
✅ Security Check: No hardcoded secrets found
✅ SQL Injection: Parameterized queries used correctly
⚠️ Performance: Consider caching the database result (line 23)
⚠️ Complexity: Function has cyclomatic complexity of 12 (threshold: 10)
✅ Documentation: Proper docstring with type hints
```

### Comprehensive Pull Request Review
```
You: "Perform a full code review on this PR following our team standards."

Cursor Code Review Pro:
📋 **Code Quality Summary**
- Maintainability Index: 78/100 (Good)
- Duplication: 2% (Excellent)
- Test Coverage: 85% (Good)

🔒 **Security Assessment**
- Critical Issues: 0
- High Severity: 1 (Missing input validation on line 45)
- Medium Severity: 2 (Consider rate limiting on API endpoint)

⚡ **Performance Analysis**
- Hot Path Identified: Database query in user authentication
- Recommendation: Add database index on `user_id` column
- Memory Usage: Efficient object allocation patterns

🎯 **Team Standards Compliance**
- ✅ Follows naming conventions
- ✅ Proper error handling
- ⚠️ Missing logging in critical path (add debug logs)
```

## Installation

### For Cursor Users
1. Create a `.cursorrules` file in your project root
2. Add the following configuration:

```json
{
  "skills": {
    "code-review-pro": {
      "enabled": true,
      "severityThreshold": "medium",
      "autoFix": true,
      "teamStandards": "path/to/team-standards.json"
    }
  }
}
```

### For Antigravity Users
```bash
skill install cursor-code-review-pro
```

## Customization

### Team Standards Configuration
Create a `team-standards.json` file to customize the review criteria:

```json
{
  "codeQuality": {
    "maxComplexity": 8,
    "minTestCoverage": 90,
    "allowedDuplication": 1
  },
  "security": {
    "scanDependencies": true,
    "requireInputValidation": true,
    "enforceRateLimiting": true
  },
  "performance": {
    "databaseQueryTimeout": 100,
    "memoryLeakDetection": true,
    "cpuUsageThreshold": 50
  }
}
```

### Integration with CI/CD
Add to your CI pipeline:

```yaml
- name: Code Review
  run: |
    cursor review --skill code-review-pro \
                  --output-format json \
                  --fail-on-severity high \
                  --report-file review-report.json
```

## Best Practices

### 1. Start Small
Begin with basic security and quality checks, then gradually add performance and team-specific rules.

### 2. Use Progressive Enhancement
Configure the skill to start with warnings rather than errors, then tighten the standards over time.

### 3. Integrate Early
Run code reviews during development, not just before PR submission.

### 4. Customize for Your Stack
Tailor the rules to your specific technology stack and business requirements.

### 5. Measure Impact
Track metrics like bug reduction, code quality improvement, and developer satisfaction.

## Platform Notes
- **Cursor**: Native integration with `.cursorrules` configuration
- **Claude Code**: Use `skill install cursor-code-review-pro`
- **Antigravity**: Place in `skills/` directory and reference in prompts
- **OpenClaw**: Compatible with OpenClaw skill system

## Version History
- **v1.0**: Initial release with basic code quality and security checks
- **v1.1**: Added performance analysis and team customization
- **v1.2**: Improved CI/CD integration and reporting capabilities

## Related Skills
- **Systematic Debugging**: For methodical bug finding and fixing
- **Performance Optimization**: Deep dive into performance bottlenecks
- **Security Auditor**: Comprehensive security testing beyond code review

**Tags:** Code Review, Security, Performance, Quality, Cursor, AI Agents