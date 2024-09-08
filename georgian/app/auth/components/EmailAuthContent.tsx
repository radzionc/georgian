import { useHandleQueryParams } from '@georgian/app/navigation/hooks/useHandleQueryParams'
import { useCallback } from 'react'
import { AuthView } from '@lib/ui/auth/AuthView'
import { getCurrentTimezoneOffset } from '@lib/utils/time/getCurrentTimezoneOffset'
import { AuthConfirmationStatus } from './AuthConfirmationStatus'
import { useApiMutation } from '@georgian/api-ui/hooks/useApiMutation'
import { useAuthSession } from '@georgian/app/auth/hooks/useAuthSession'

interface EmailAuthParams {
  code: string
}

export const EmailAuthContent = () => {
  const [, updateSession] = useAuthSession()

  const { mutate: authenticateWithEmail, error } = useApiMutation(
    'authSessionWithEmail',
    {
      onSuccess: updateSession,
    },
  )

  useHandleQueryParams<EmailAuthParams>(
    useCallback(
      ({ code }) => {
        authenticateWithEmail({
          code,
          timeZone: getCurrentTimezoneOffset(),
        })
      },
      [authenticateWithEmail],
    ),
  )

  return (
    <AuthView title={`Continue with email`}>
      <AuthConfirmationStatus error={error as Error | undefined} />
    </AuthView>
  )
}
