# @slate71/agent-status

React component for rendering AI agent state in a dashboard.

## Installation

```bash
npm install @slate71/agent-status
```

## Usage

```tsx
import { AgentStatus } from '@slate71/agent-status'
import '@slate71/agent-status/styles.css'

const agent = {
  id: 'agent-1',
  name: 'Data Processor',
  status: 'running',
  currentTask: 'Processing batch 42 of 100...',
  lastActivity: new Date(),
  metrics: {
    tasksCompleted: 156,
    successRate: 0.94,
    avgDuration: 3500
  }
}

function App() {
  return (
    <AgentStatus
      agent={agent}
      onPause={(id) => console.log('Pause', id)}
      onStop={(id) => console.log('Stop', id)}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `agent` | `Agent` | required | Agent object with status and details |
| `className` | `string` | `''` | Additional CSS class names |
| `showMetrics` | `boolean` | `true` | Show/hide metrics section |
| `onPause` | `(id: string) => void` | - | Callback when pause button clicked |
| `onResume` | `(id: string) => void` | - | Callback when resume button clicked |
| `onStop` | `(id: string) => void` | - | Callback when stop button clicked |
| `onRetry` | `(id: string) => void` | - | Callback when retry button clicked |

## Agent Status Types

- `running` - Agent is actively processing
- `idle` - Agent is waiting for tasks
- `paused` - Agent execution is paused
- `error` - Agent encountered an error

## Demo

View the live demo at [https://slate71.github.io/agent-status/](https://slate71.github.io/agent-status/)

## License

MIT