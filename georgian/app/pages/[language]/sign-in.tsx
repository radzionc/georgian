import { AuthPageContainer } from '../../auth/components/AuthPageContainer'
import { SignInContent } from '../../auth/components/SignInContent'
import { PageContainer } from '../../components/PageContainer'
import { LocalizedPageProps } from '../../copy/LocalizedPageProps'
import {
  getStaticPaths,
  getStaticProps,
} from '@georgian/app/navigation/pages/translatedPage'

export default ({ language }: LocalizedPageProps) => (
  <PageContainer isTranslated language={language}>
    <AuthPageContainer>
      <SignInContent />
    </AuthPageContainer>
  </PageContainer>
)

export { getStaticPaths, getStaticProps }
