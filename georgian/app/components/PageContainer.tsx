import { LanguageProvider } from '@georgian/languages-ui/components/LanguageProvider'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { CopyProvider } from '../copy/CopyProvider'
import { LocalizedPageProps } from '../copy/LocalizedPageProps'
import { getCopy } from '../copy/getCopy'
import { WebsiteLayout } from '../layout/components/WebsiteLayout'

interface PageContainerProps
  extends LocalizedPageProps,
    ComponentWithChildrenProps {
  isTranslated: boolean
}

export const PageContainer = ({
  children,
  language,
  isTranslated,
}: PageContainerProps) => (
  <LanguageProvider
    value={{
      language,
      isTranslated,
    }}
  >
    <PageMetaTags language={language} />
    <CopyProvider value={getCopy(language)}>
      <WebsiteLayout>{children}</WebsiteLayout>
    </CopyProvider>
  </LanguageProvider>
)
