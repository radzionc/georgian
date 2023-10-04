import { GetLayout, Page } from 'layout/Page'
import { WebsiteLayout } from './components/WebsiteLayout'

export const getWebsitePageLayout: GetLayout = (page) => (
  <WebsiteLayout>{page}</WebsiteLayout>
)

export function makeWebsitePage<T>(page: Page<T>) {
  page.getLayout = getWebsitePageLayout

  return page
}
