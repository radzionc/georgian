import { primaryLanguage } from '@georgian/languages/Language'
import { AuthPageContainer } from '../auth/components/AuthPageContainer'
import { EmailConfirmContent } from '../auth/components/EmailConfirmContent'
import { PageContainer } from '../components/PageContainer'

export default () => (
  <PageContainer language={primaryLanguage} isTranslated={false}>
    <AuthPageContainer>
      <EmailConfirmContent />
    </AuthPageContainer>
  </PageContainer>
)
