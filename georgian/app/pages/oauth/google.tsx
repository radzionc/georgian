import { OAuthContent } from '../../auth/components/OAuthContent'
import { AuthPageContainer } from '../../auth/components/AuthPageContainer'

export default () => (
  <AuthPageContainer>
    <OAuthContent provider={'google'} />
  </AuthPageContainer>
)
