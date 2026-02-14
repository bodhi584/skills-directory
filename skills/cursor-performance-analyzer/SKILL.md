# Cursor Performance Analyzer

## What It Does
Advanced performance analysis and optimization for codebases using Cursor AI. Identifies bottlenecks, suggests optimizations, and provides actionable insights for improving application performance.

## When to Use
- Before major releases to ensure optimal performance
- When users report slow response times
- During code reviews to catch performance anti-patterns
- When migrating to new frameworks or libraries
- For continuous performance monitoring in CI/CD pipelines

## How It Works
The skill leverages Cursor's deep code understanding to analyze performance across multiple dimensions:

### 1. Database Query Analysis
- Identifies N+1 query problems
- Detects missing database indexes
- Suggests query optimization strategies
- Analyzes connection pooling efficiency

### 2. Frontend Performance
- Identifies render-blocking resources
- Detects memory leaks in JavaScript
- Analyzes bundle size and dependencies
- Suggests lazy loading opportunities

### 3. Backend Optimization
- Identifies CPU-intensive operations
- Detects memory allocation issues
- Analyzes I/O bottlenecks
- Suggests caching strategies

### 4. Algorithm Efficiency
- Identifies inefficient algorithms (O(n²) vs O(n log n))
- Suggests data structure optimizations
- Recommends parallelization opportunities

## Usage Examples

### Basic Performance Scan
```
You: "Analyze the performance of our user dashboard component."

Cursor Performance Analyzer: 
- Detected 3 N+1 queries in user profile loading
- Found unoptimized image loading causing 2s delay
- Identified redundant re-renders in React component
- Recommended: Add database indexes on user_id, implement lazy loading for images, memoize expensive calculations
```

### Comprehensive Codebase Analysis
```
You: "Run a full performance audit on our e-commerce backend."

Cursor Performance Analyzer:
- Database: 12 slow queries identified, 8 missing indexes recommended
- API: 3 endpoints with >2s response time, caching strategy suggested
- Memory: Memory leak detected in session management, fix provided
- Algorithms: Product search using O(n²) algorithm, optimized version implemented
- Result: Estimated 60% performance improvement with recommended changes
```

### CI/CD Integration
```yaml
# .github/workflows/performance.yml
name: Performance Audit
on: [pull_request]
jobs:
  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Cursor Performance Analyzer
        run: |
          cursor --skill performance-analyzer \
                 --target ./src \
                 --threshold medium \
                 --output report.json
      - name: Fail if critical issues found
        run: |
          if [ $(jq '.critical_issues | length' report.json) -gt 0 ]; then
            echo "Critical performance issues found!"
            exit 1
          fi
```

## Configuration Options

### Severity Levels
- `low`: Minor optimizations and suggestions
- `medium`: Noticeable performance improvements
- `high`: Significant bottlenecks affecting user experience
- `critical`: Severe performance issues requiring immediate attention

### Target Areas
- `database`: Focus on database query optimization
- `frontend`: Focus on client-side performance
- `backend`: Focus on server-side performance
- `algorithms`: Focus on computational efficiency
- `all`: Comprehensive analysis across all areas

### Output Formats
- `markdown`: Human-readable report
- `json`: Machine-readable format for CI/CD integration
- `csv`: Spreadsheet-friendly format for tracking
- `html`: Interactive web report with visualizations

## Best Practices

### 1. Regular Performance Audits
Run weekly performance audits to catch regressions early:
```bash
cursor --skill performance-analyzer --schedule weekly
```

### 2. Performance Budgets
Set performance budgets and enforce them in CI/CD:
```json
{
  "performanceBudget": {
    "maxBundleSize": "2MB",
    "maxResponseTime": "500ms",
    "maxMemoryUsage": "512MB"
  }
}
```

### 3. Progressive Optimization
Focus on high-impact, low-effort optimizations first:
- Database indexes (high impact, low effort)
- Caching strategies (high impact, medium effort)
- Algorithm improvements (medium impact, high effort)

### 4. Measure Before and After
Always measure performance before and after implementing optimizations:
```bash
# Before optimization
time curl -s https://api.example.com/users > /dev/null

# After optimization  
time curl -s https://api.example.com/users > /dev/null
```

## Integration with Other Skills

### With Cursor Code Review Pro
Combine performance analysis with code quality review:
```bash
cursor --skill code-review-pro,performance-analyzer --target ./src
```

### With Systematic Debugging
Use systematic debugging to verify performance fixes:
```bash
cursor --skill systematic-debugging --test performance-regression
```

## Platform Notes
- **Cursor**: Native support with `@cursor/performance-analyzer` plugin
- **Claude Code**: Compatible via skill import
- **Antigravity**: Available in skills directory
- **OpenClaw**: Install with `openclaw skill install cursor-performance-analyzer`

## Example Workflow

1. **Identify**: Run initial performance scan
2. **Prioritize**: Focus on critical and high severity issues
3. **Implement**: Apply recommended optimizations
4. **Verify**: Measure performance improvement
5. **Monitor**: Set up continuous performance monitoring

## Tags
Performance, Optimization, Cursor, Database, Frontend, Backend, Algorithms, CI/CD, Monitoring

## Version History
- v1.0.0: Initial release with basic performance analysis
- v1.1.0: Added database query analysis and frontend performance detection
- v1.2.0: Added CI/CD integration and performance budgets
- v1.3.0: Added algorithm efficiency analysis and memory leak detection