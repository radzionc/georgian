import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { AuthenticationResult } from './AuthenticationResult'
import { getOAuthAccessToken } from './getOAuthAccessToken'
import { getOAuthUserInfo } from './getOAuthUserInfo'
import { OAuthProvider } from '@lib/auth/OAuthProvider'
import { ApiError } from '@georgian/api-interface/ApiError'

interface AuthenticateWithOAuthParams {
  provider: OAuthProvider
  code: string
  redirectUri: string
}

export const authenticateWithOAuth = async ({
  provider,
  code,
  redirectUri,
}: AuthenticateWithOAuthParams): Promise<AuthenticationResult> => {
  const accessToken = await getOAuthAccessToken({
    provider,
    code,
    redirectUri,
  })

  const { email, name } = await getOAuthUserInfo({
    provider,
    accessToken,
  })

  if (!email) {
    throw new ApiError(
      'invalidInput',
      `Your ${capitalizeFirstLetter(
        provider,
      )} account doesn't provide an email. Please try a different authentication method.`,
    )
  }

  return { email, name }
}
