import React from 'react'
import { AgentStatusProps } from './types'
import { useRelativeTime } from './hooks/use-relative-time'

export const AgentStatus: React.FC<AgentStatusProps> = ({
  agent,
  className = '',
  showMetrics = true,
  onPause,
  onResume,
  onStop,
  onRetry
}) => {
  const relativeTime = useRelativeTime(agent.lastActivity)

  const getStatusIndicatorClass = () => {
    switch (agent.status) {
      case 'running':
        return 'agent-status-indicator-running'
      case 'idle':
        return 'agent-status-indicator-idle'
      case 'paused':
        return 'agent-status-indicator-paused'
      case 'error':
        return 'agent-status-indicator-error'
      default:
        return ''
    }
  }

  const getStatusClass = () => {
    switch (agent.status) {
      case 'running':
        return 'agent-status-running'
      case 'idle':
        return 'agent-status-idle'
      case 'paused':
        return 'agent-status-paused'
      case 'error':
        return 'agent-status-error'
      default:
        return ''
    }
  }

  const getStatusMessage = () => {
    switch (agent.status) {
      case 'running':
        return agent.currentTask || 'Processing...'
      case 'idle':
        return 'Waiting for tasks...'
      case 'paused':
        return 'Paused'
      case 'error':
        return agent.error?.message || 'An error occurred'
      default:
        return ''
    }
  }

  const formatDuration = (ms?: number) => {
    if (!ms) return '-'
    const seconds = Math.floor(ms / 1000)
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ${seconds % 60}s`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ${minutes % 60}m`
  }

  return (
    <div className={`agent-status ${getStatusClass()} ${className}`} aria-live="polite">
      <div className="agent-status-header">
        <div className="agent-status-info">
          <span className={`agent-status-indicator ${getStatusIndicatorClass()}`} aria-label={`Status: ${agent.status}`} />
          <span className="agent-status-name">{agent.name}</span>
        </div>
        <div className="agent-status-actions">
          {agent.status === 'running' && onPause && (
            <button
              className="agent-status-button agent-status-button-pause"
              onClick={() => onPause(agent.id)}
              aria-label="Pause agent"
            >
              Pause
            </button>
          )}
          {agent.status === 'running' && onStop && (
            <button
              className="agent-status-button agent-status-button-stop"
              onClick={() => onStop(agent.id)}
              aria-label="Stop agent"
            >
              Stop
            </button>
          )}
          {agent.status === 'paused' && onResume && (
            <button
              className="agent-status-button agent-status-button-resume"
              onClick={() => onResume(agent.id)}
              aria-label="Resume agent"
            >
              Resume
            </button>
          )}
          {agent.status === 'paused' && onStop && (
            <button
              className="agent-status-button agent-status-button-stop"
              onClick={() => onStop(agent.id)}
              aria-label="Stop agent"
            >
              Stop
            </button>
          )}
          {agent.status === 'error' && onRetry && (
            <button
              className="agent-status-button agent-status-button-retry"
              onClick={() => onRetry(agent.id)}
              aria-label="Retry agent"
            >
              Retry
            </button>
          )}
        </div>
      </div>

      <div className="agent-status-body">
        <div className="agent-status-message">{getStatusMessage()}</div>
        {relativeTime && (
          <div className="agent-status-last-activity">Last active: {relativeTime}</div>
        )}
      </div>

      {showMetrics && agent.metrics && (
        <div className="agent-status-footer">
          <div className="agent-status-metrics">
            <div className="agent-status-metric">
              <span className="agent-status-metric-label">Tasks:</span>
              <span className="agent-status-metric-value">{agent.metrics.tasksCompleted}</span>
            </div>
            <div className="agent-status-metric">
              <span className="agent-status-metric-label">Success:</span>
              <span className="agent-status-metric-value">{Math.round(agent.metrics.successRate * 100)}%</span>
            </div>
            <div className="agent-status-metric">
              <span className="agent-status-metric-label">Avg duration:</span>
              <span className="agent-status-metric-value">{formatDuration(agent.metrics.avgDuration)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}