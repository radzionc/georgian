import { useCallback } from 'react'
import { useHandleQueryParams } from '@georgian/app/navigation/hooks/useHandleQueryParams'
import { AuthView } from '@lib/ui/auth/AuthView'
import { getCurrentTimezoneOffset } from '@lib/utils/time/getCurrentTimezoneOffset'
import { getOAuthRedirectUri } from '@georgian/app/auth/utils/oauth'
import { AuthConfirmationStatus } from './AuthConfirmationStatus'

import { useApiMutation } from '@georgian/api-ui/hooks/useApiMutation'
import { useAuthSession } from '@georgian/app/auth/hooks/useAuthSession'
import { OAuthProvider, oAuthProviderName } from '@lib/auth/OAuthProvider'

interface OAuthParams {
  code: string
}

interface OAuthContentProps {
  provider: OAuthProvider
}

export const OAuthContent = ({ provider }: OAuthContentProps) => {
  const [, updateSession] = useAuthSession()

  const { mutate: authenticate, error } = useApiMutation(
    'authSessionWithOAuth',
    {
      onSuccess: updateSession,
    },
  )

  useHandleQueryParams<OAuthParams>(
    useCallback(
      ({ code }) => {
        authenticate({
          provider,
          code,
          redirectUri: getOAuthRedirectUri(provider),
          timeZone: getCurrentTimezoneOffset(),
        })
      },
      [authenticate, provider],
    ),
  )

  return (
    <AuthView title={`Continue with ${oAuthProviderName[provider]}`}>
      <AuthConfirmationStatus error={error as Error | undefined} />
    </AuthView>
  )
}
