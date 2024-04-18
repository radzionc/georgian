import { Text } from '@lib/ui/text'
import { LinkText } from '@lib/ui/text/LinkText'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { productName } from '@georgian/config'
import { Path } from '../../../navigation/Path'

export const SignUpAgreement = () => {
  return (
    <Text centered size={14} color="supporting">
      By continuing, you agree to {productName}’s
      <br />
      <LinkText as="span">
        <ExternalLink to={Path.TermsOfService}>Terms of Service</ExternalLink>
      </LinkText>{' '}
      and{' '}
      <LinkText as="span">
        <ExternalLink to={Path.PrivacyPolicy}>Privacy Policy</ExternalLink>
      </LinkText>
    </Text>
  )
}
