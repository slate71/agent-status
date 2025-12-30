export type AgentStatus = 'running' | 'idle' | 'error' | 'paused'

export interface AgentMetrics {
  tasksCompleted: number
  successRate: number
  avgDuration?: number
}

export interface AgentError {
  message: string
  timestamp: Date
}

export interface Agent {
  id: string
  name: string
  status: AgentStatus
  currentTask?: string
  lastActivity?: Date
  metrics?: AgentMetrics
  error?: AgentError
}

export interface AgentStatusProps {
  agent: Agent
  className?: string
  showMetrics?: boolean
  onPause?: (id: string) => void
  onResume?: (id: string) => void
  onStop?: (id: string) => void
  onRetry?: (id: string) => void
}