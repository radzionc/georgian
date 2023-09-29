import { GetLayout, Page } from 'layout/Page'
import { WebsiteLayout } from './components/WebsiteLayout'

export const getWebsitePageLayout: GetLayout = (page) => (
  <WebsiteLayout>{page}</WebsiteLayout>
)

export const makeWebsitePage = (page: Page) => {
  page.getLayout = getWebsitePageLayout

  return page
}
