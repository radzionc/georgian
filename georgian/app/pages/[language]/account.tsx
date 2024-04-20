import { PageContainer } from '../../components/PageContainer'
import { UserStateOnly } from '../../user/state/UserStateOnly'
import { WebsitePageContent } from '../../layout/components/WebsitePageContent'
import { AccountPageContent } from '../../account/AccountPageContent'
import {
  getStaticPaths,
  getStaticProps,
} from '@georgian/app/navigation/pages/translatedPage'
import { LocalizedPageProps } from '../../copy/LocalizedPageProps'

export default ({ language }: LocalizedPageProps) => (
  <PageContainer isTranslated language={language}>
    <WebsitePageContent maxWidth={600}>
      <UserStateOnly>
        <AccountPageContent />
      </UserStateOnly>
    </WebsitePageContent>
  </PageContainer>
)

export { getStaticPaths, getStaticProps }
