import React from 'react'
import { AgentStatus } from '../AgentStatus'
import { Agent } from '../types'
import '../AgentStatus.css'

const App: React.FC = () => {
  const runningAgent: Agent = {
    id: 'agent-1',
    name: 'Data Processor',
    status: 'running',
    currentTask: 'Processing batch 42 of 100...',
    lastActivity: new Date(Date.now() - 120000),
    metrics: {
      tasksCompleted: 156,
      successRate: 0.94,
      avgDuration: 3500
    }
  }

  const idleAgent: Agent = {
    id: 'agent-2',
    name: 'Report Generator',
    status: 'idle',
    lastActivity: new Date(Date.now() - 3600000),
    metrics: {
      tasksCompleted: 42,
      successRate: 0.98,
      avgDuration: 12000
    }
  }

  const pausedAgent: Agent = {
    id: 'agent-3',
    name: 'File Sync Agent',
    status: 'paused',
    currentTask: 'Syncing documents folder...',
    lastActivity: new Date(Date.now() - 600000),
    metrics: {
      tasksCompleted: 89,
      successRate: 0.91,
      avgDuration: 8500
    }
  }

  const errorAgent: Agent = {
    id: 'agent-4',
    name: 'API Monitor',
    status: 'error',
    lastActivity: new Date(Date.now() - 30000),
    error: {
      message: 'Connection timeout: Unable to reach endpoint https://api.example.com',
      timestamp: new Date()
    },
    metrics: {
      tasksCompleted: 203,
      successRate: 0.87,
      avgDuration: 1200
    }
  }

  const handlePause = (id: string) => {
    console.log('Pause agent:', id)
  }

  const handleResume = (id: string) => {
    console.log('Resume agent:', id)
  }

  const handleStop = (id: string) => {
    console.log('Stop agent:', id)
  }

  const handleRetry = (id: string) => {
    console.log('Retry agent:', id)
  }

  return (
    <div style={{
      padding: '32px',
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px', color: '#111827' }}>
          AgentStatus Component Demo
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '32px' }}>
          React component for rendering AI agent state in a dashboard
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#6b7280' }}>
              Running State
            </h2>
            <AgentStatus
              agent={runningAgent}
              onPause={handlePause}
              onStop={handleStop}
            />
          </div>

          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#6b7280' }}>
              Idle State
            </h2>
            <AgentStatus
              agent={idleAgent}
            />
          </div>

          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#6b7280' }}>
              Paused State
            </h2>
            <AgentStatus
              agent={pausedAgent}
              onResume={handleResume}
              onStop={handleStop}
            />
          </div>

          <div>
            <h2 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#6b7280' }}>
              Error State
            </h2>
            <AgentStatus
              agent={errorAgent}
              onRetry={handleRetry}
            />
          </div>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
            Without Metrics
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '24px'
          }}>
            <AgentStatus
              agent={runningAgent}
              showMetrics={false}
              onPause={handlePause}
              onStop={handleStop}
            />
            <AgentStatus
              agent={errorAgent}
              showMetrics={false}
              onRetry={handleRetry}
            />
          </div>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
            Usage Notes
          </h2>
          <ul style={{ color: '#6b7280', lineHeight: '1.7', paddingLeft: '20px' }}>
            <li>Click action buttons to see console output with agent ID</li>
            <li>Status indicators pulse when agent is running</li>
            <li>Last activity time updates automatically every minute</li>
            <li>Metrics can be hidden with showMetrics prop</li>
            <li>Component supports dark mode via prefers-color-scheme</li>
            <li>All status transitions are accessible to screen readers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App