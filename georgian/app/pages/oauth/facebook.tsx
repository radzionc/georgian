import { OAuthContent } from '../../auth/components/OAuthContent'
import { AuthPageContainer } from '../../auth/components/AuthPageContainer'
import { PageContainer } from '../../components/PageContainer'
import { primaryLanguage } from '@georgian/languages/Language'

export default () => (
  <PageContainer language={primaryLanguage} isTranslated={false}>
    <AuthPageContainer>
      <OAuthContent provider={'facebook'} />
    </AuthPageContainer>
  </PageContainer>
)
