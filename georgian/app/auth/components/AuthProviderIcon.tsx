import { OAuthProvider } from '@lib/auth/OAuthProvider'
import { Match } from '@lib/ui/base/Match'
import { FacebookIcon } from '@lib/ui/icons/FacebookIcon'
import { GoogleIcon } from '@lib/ui/icons/GoogleIcon'

interface AuthProviderIconProps {
  provider: OAuthProvider
}

export const AuthProviderIcon = ({ provider }: AuthProviderIconProps) => (
  <Match
    value={provider}
    google={() => <GoogleIcon />}
    facebook={() => <FacebookIcon />}
  />
)
