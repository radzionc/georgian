import { analytics } from '@georgian/app/analytics'

import { IconCentricButton } from '@lib/ui/buttons/IconCentricButton'
import { getOAuthUrl } from '@georgian/app/auth/utils/oauth'
import { AuthProviderIcon } from './AuthProviderIcon'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { OAuthProvider, oAuthProviderName } from '@lib/auth/OAuthProvider'

interface OAuthOptionProps {
  provider: OAuthProvider
}

export const OAuthOption = ({ provider }: OAuthOptionProps) => {
  const providerName = oAuthProviderName[provider]

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
        as="div"
        text={`Continue with ${providerName}`}
        icon={<AuthProviderIcon provider={provider} />}
      />
    </ExternalLink>
  )
}
