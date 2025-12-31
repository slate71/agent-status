# CLAUDE.md

This file provides guidance for Claude when working on this repository.

## Project Overview

@slate71/agent-status is a React component library for rendering AI agent state in dashboards. It provides the `AgentStatus` component that displays agent information including status, current task, and metrics.

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build library for npm publication (outputs to `dist/`)
- `npm run build:demo` - Build demo site for GitHub Pages (outputs to `demo-dist/`)
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy demo to GitHub Pages

## Project Structure

- `src/AgentStatus.tsx` - Main component
- `src/AgentStatus.css` - Component styles with CSS custom properties
- `src/App.tsx` - Demo application
- `vite.config.ts` - Library build configuration
- `vite.demo.config.ts` - Demo build configuration

## Agent Status Types

The component supports four status states:
- `running` - Green indicator with pulse animation
- `idle` - Gray indicator
- `paused` - Orange indicator
- `error` - Red indicator with error message

## Styling

The component uses CSS custom properties for theming and supports automatic dark mode via `prefers-color-scheme` media query.
