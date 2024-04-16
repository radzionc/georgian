import { ApiError } from '@georgian/api-interface/ApiError'
import { asyncAttempt } from '@lib/utils/asyncAttempt'

export const queryOAuthProvider = async <T>(
  action: string,
  ...args: Parameters<typeof fetch>
) => {
  const response = await fetch(...args)

  if (!response.ok) {
    const message = await asyncAttempt(
      () => response.text(),
      response.statusText,
    )
    throw new ApiError('invalidInput', `${action} failed: ${message}`)
  }

  return (await response.json()) as T
}
