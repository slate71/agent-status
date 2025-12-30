import { useEffect, useState } from 'react'

export const useRelativeTime = (date?: Date): string | undefined => {
  const [relativeTime, setRelativeTime] = useState<string | undefined>()

  useEffect(() => {
    if (!date) {
      setRelativeTime(undefined)
      return
    }

    const calculateRelativeTime = () => {
      const now = new Date()
      const diff = now.getTime() - date.getTime()
      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      if (days > 0) {
        return `${days} day${days === 1 ? '' : 's'} ago`
      } else if (hours > 0) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`
      } else if (minutes > 0) {
        return `${minutes} min${minutes === 1 ? '' : 's'} ago`
      } else if (seconds > 30) {
        return `${seconds} sec${seconds === 1 ? '' : 's'} ago`
      } else {
        return 'Just now'
      }
    }

    setRelativeTime(calculateRelativeTime())

    const interval = setInterval(() => {
      setRelativeTime(calculateRelativeTime())
    }, 60000)

    return () => clearInterval(interval)
  }, [date])

  return relativeTime
}