import { WebsiteLayout } from './components/WebsiteLayout'
import { Page } from '@lib/next-ui/Page'

export const withWebsiteLayout =
  <T extends {}>(Page: Page<T>) =>
  (props: T) => {
    return (
      <WebsiteLayout>
        <Page {...props} />
      </WebsiteLayout>
    )
  }
