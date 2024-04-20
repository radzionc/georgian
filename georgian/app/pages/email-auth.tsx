import { primaryLanguage } from '@georgian/languages/Language'
import { AuthPageContainer } from '../auth/components/AuthPageContainer'
import { EmailAuthContent } from '../auth/components/EmailAuthContent'
import { PageContainer } from '../components/PageContainer'

export default () => (
  <PageContainer language={primaryLanguage} isTranslated={false}>
    <AuthPageContainer>
      <EmailAuthContent />
    </AuthPageContainer>
  </PageContainer>
)
