type VariableName = 'SENTRY_KEY' | 'PADDLE_SECRET_KEY' | 'PADDLE_API_KEY'

export const getEnvVar = (name: VariableName): string => {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing ${name} environment variable`)
  }

  return value
}
