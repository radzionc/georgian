import * as Sentry from '@sentry/nextjs'

export const setUserIdForErrorMonitoring = (userId: string) => {
  if (process.env.NODE_ENV !== 'production') return

  Sentry.configureScope((scope) => {
    scope.setUser({ id: userId })
  })
}

export const reportError = (error: any, extra: Record<string, string> = {}) => {
  console.log('reportError', error, extra)
  Sentry.withScope((scope) => {
    Object.entries(extra).forEach(([key, value]) => {
      scope.setExtra(key, value)
    })
    Sentry.captureException(error)
  })
}
