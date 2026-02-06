# System Monitor Skill

Monitor server resources (CPU, Memory, Disk).

## Tools

### system_stats
Get current system resource usage.

**Implementation:**
run:
  engine: sh
  script: |
    echo "=== System Load ==="
    uptime
    echo "\n=== Memory (MB) ==="
    free -m
    echo "\n=== Disk Usage ==="
    df -h /
