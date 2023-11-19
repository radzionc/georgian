import { LocalizedPageProps } from 'copy/LocalizedPageProps'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'
import { LanguageProvider } from '@georgian/languages-ui/components/LanguageProvider'
import { CopyProvider } from 'copy/CopyProvider'
import { WebsiteLayout } from 'layout/components/WebsiteLayout'
import {
  CategoryTestPage,
  CategoryTestPageProps,
} from 'tickets/components/CategoryTestPage'
import { getCopy } from 'copy/getCopy'

export default ({
  language,
  ...rest
}: LocalizedPageProps & CategoryTestPageProps) => (
  <LanguageProvider value={language}>
    <CopyProvider value={getCopy(language)}>
      <WebsiteLayout>
        <CategoryTestPage {...rest} />
      </WebsiteLayout>
    </CopyProvider>
  </LanguageProvider>
)

export { getStaticPaths, getStaticProps }
