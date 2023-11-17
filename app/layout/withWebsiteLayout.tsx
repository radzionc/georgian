import { Page } from 'layout/Page'
import { WebsiteLayout } from './components/WebsiteLayout'

export const withWebsiteLayout =
  <T extends {}>(Page: Page<T>) =>
  (props: T) => {
    return (
      <WebsiteLayout>
        <Page {...props} />
      </WebsiteLayout>
    )
  }
