import { analytics } from '@georgian/app/analytics'

import { IconCentricButton } from '@lib/ui/buttons/IconCentricButton'
import { getOAuthUrl } from '@georgian/app/auth/utils/oauth'
import { AuthProviderIcon } from './AuthProviderIcon'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { OAuthProvider, oAuthProviderName } from '@lib/auth/OAuthProvider'
import { useCopy } from '../../copy/CopyProvider'
import { match } from '@lib/utils/match'

interface OAuthOptionProps {
  provider: OAuthProvider
}

export const OAuthOption = ({ provider }: OAuthOptionProps) => {
  const providerName = oAuthProviderName[provider]
  const copy = useCopy()

  return (
    <ExternalLink
      key={provider}
      to={getOAuthUrl(provider)}
      openInSameTab
      onClick={() => {
        analytics.trackEvent(`Start identification with ${providerName}`)
      }}
    >
      <IconCentricButton
        style={{ fontSize: 16 }}
        as="div"
        text={match(provider, {
          google: () => copy.continueWithGoogle,
          facebook: () => copy.continueWithFacebook,
        })}
        icon={<AuthProviderIcon provider={provider} />}
      />
    </ExternalLink>
  )
}
