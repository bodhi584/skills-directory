# Cursor Multi-Agent Orchestrator

## What It Does
Orchestrates multiple Cursor agents to work collaboratively on complex development tasks, enabling parallel development, code review, and testing workflows.

## When to Use
When you need to:
- Handle large-scale refactoring projects
- Perform simultaneous code reviews and testing
- Coordinate multiple development tasks
- Implement complex multi-step development workflows

## How It Works
The skill creates and manages multiple Cursor agent instances with specialized roles:
- **Architect Agent**: Designs system architecture and makes high-level decisions
- **Developer Agent**: Implements code based on specifications
- **Reviewer Agent**: Performs systematic code reviews and quality checks
- **Tester Agent**: Creates and executes test cases
- **Integrator Agent**: Coordinates all agents and ensures consistency

## Key Features

### Agent Role Assignment
```yaml
agents:
  - name: architect
    role: "System Architect"
    expertise: ["architecture", "design patterns", "scalability"]
  - name: developer  
    role: "Senior Developer"
    expertise: ["implementation", "best practices", "code quality"]
  - name: reviewer
    role: "Code Reviewer"
    expertise: ["security", "performance", "maintainability"]
  - name: tester
    role: "QA Engineer"
    expertise: ["testing", "edge cases", "automation"]
```

### Task Coordination Workflow
1. **Task Decomposition**: Break complex tasks into subtasks
2. **Agent Assignment**: Assign subtasks to appropriate agents
3. **Parallel Execution**: Execute tasks simultaneously
4. **Quality Gate**: Review and validate results
5. **Integration**: Combine results into final output

### Communication Protocol
Agents communicate through structured messages:
```json
{
  "task_id": "refactor-auth-module",
  "from_agent": "architect",
  "to_agent": "developer",
  "message_type": "specification",
  "content": {
    "requirements": [...],
    "constraints": [...],
    "deliverables": [...]
  }
}
```

## Examples

### Example 1: Large Refactoring Project
```
You: "Refactor our authentication module to use OAuth 2.0 with proper error handling and security measures."

Cursor Multi-Agent Orchestrator:
1. Architect designs the OAuth 2.0 implementation strategy
2. Developer implements the code with proper error handling
3. Reviewer checks for security vulnerabilities and best practices
4. Tester creates comprehensive test cases for all scenarios
5. Integrator ensures all components work together seamlessly
```

### Example 2: Feature Development
```
You: "Implement a real-time notification system with WebSocket support and proper fallback mechanisms."

Cursor Multi-Agent Orchestrator:
1. Architect designs the real-time architecture with fallback strategies
2. Developer implements WebSocket handlers and HTTP fallback
3. Reviewer validates security and performance considerations
4. Tester creates load tests and failure scenario tests
5. Integrator ensures seamless integration with existing codebase
```

## Setup Instructions

### Installation
```bash
# Clone the skill repository
git clone https://github.com/antigravityskills/cursor-multi-agent-orchestrator.git

# Add to your Cursor workspace
cp -r cursor-multi-agent-orchestrator ~/.cursor/skills/
```

### Configuration
Create `.cursorrules` in your project root:
```yaml
skills:
  - name: cursor-multi-agent-orchestrator
    enabled: true
    config:
      max_agents: 5
      communication_timeout: 300
      quality_threshold: 0.8
```

### Usage
```bash
# Start multi-agent orchestration
cursor agent start --skill multi-agent-orchestrator --task "your complex task"

# Monitor agent progress
cursor agent status --skill multi-agent-orchestrator

# Stop all agents
cursor agent stop --skill multi-agent-orchestrator
```

## Best Practices

### 1. Task Complexity Threshold
Only use multi-agent orchestration for tasks that require:
- Multiple expertise domains
- Complex coordination
- Extensive testing requirements
- Large codebase modifications

### 2. Agent Specialization
Clearly define each agent's role and expertise to avoid overlap and confusion.

### 3. Communication Efficiency
Use structured communication protocols to minimize overhead and ensure clarity.

### 4. Quality Gates
Implement quality gates at each stage to catch issues early.

### 5. Resource Management
Monitor resource usage and implement graceful degradation when resources are limited.

## Platform Notes
- **Cursor**: Native support with `.cursorrules` configuration
- **Claude Code**: Requires manual agent coordination setup
- **Antigravity**: Full integration with built-in agent management
- **OpenClaw**: Compatible with `agent-manager` skill

## Version History
- **v1.0.0**: Initial release with basic multi-agent orchestration
- **v1.1.0**: Added quality gates and communication protocols
- **v1.2.0**: Enhanced agent specialization and resource management

## Tags
multi-agent, cursor, orchestration, collaboration, development, productivity