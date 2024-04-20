import { Text } from '@lib/ui/text'
import { LinkText } from '@lib/ui/text/LinkText'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { Path } from '../../../navigation/Path'
import { useCopy } from '../../../copy/CopyProvider'
import { injectNodes } from '@georgian/languages-ui/utils/injectNodes'

export const SignUpAgreement = () => {
  const copy = useCopy()
  return (
    <Text height="large" centered size={14} color="supporting">
      {copy.agreement(
        {
          terms: (
            <LinkText as="span">
              <ExternalLink to={Path.TermsOfService}>
                {copy.withTermsOfService}
              </ExternalLink>
            </LinkText>
          ),
          privacy: (
            <LinkText as="span">
              <ExternalLink to={Path.PrivacyPolicy}>
                {copy.withPrivacyPolicy}
              </ExternalLink>
            </LinkText>
          ),
        },
        injectNodes,
      )}
    </Text>
  )
}
