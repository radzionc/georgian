import { primaryLanguage } from '@georgian/languages/Language'
import { PageContainer } from '../components/PageContainer'
import { UserStateOnly } from '../user/state/UserStateOnly'
import { WebsitePageContent } from '../layout/components/WebsitePageContent'
import { AccountPageContent } from '../account/AccountPageContent'

export default () => {
  return (
    <PageContainer isTranslated={false} language={primaryLanguage}>
      <WebsitePageContent maxWidth={600}>
        <UserStateOnly>
          <AccountPageContent />
        </UserStateOnly>
      </WebsitePageContent>
    </PageContainer>
  )
}
