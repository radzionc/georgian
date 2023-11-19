import { LocalizedPageProps } from 'copy/LocalizedPageProps'
import {
  TicketsCategoryPageProps,
  TicketsCategoryPage,
} from 'tickets/components/TicketsCategoryPage'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'
import { LanguageProvider } from '@georgian/languages-ui/components/LanguageProvider'
import { CopyProvider } from 'copy/CopyProvider'
import { WebsiteLayout } from 'layout/components/WebsiteLayout'
import { getCopy } from 'copy/getCopy'

export default ({
  language,
  ...rest
}: LocalizedPageProps & TicketsCategoryPageProps) => (
  <LanguageProvider value={language}>
    <CopyProvider value={getCopy(language)}>
      <WebsiteLayout>
        <TicketsCategoryPage {...rest} />
      </WebsiteLayout>
    </CopyProvider>
  </LanguageProvider>
)

export { getStaticPaths, getStaticProps }
