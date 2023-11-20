import { LanguageProvider } from '@georgian/languages-ui/components/LanguageProvider'
import { PageMetaTags } from '@georgian/ui/metadata/PageMetaTags'
import { ComponentWithChildrenProps } from '@georgian/ui/props'
import { CopyProvider } from 'copy/CopyProvider'
import { LocalizedPageProps } from 'copy/LocalizedPageProps'
import { getCopy } from 'copy/getCopy'
import { WebsiteLayout } from 'layout/components/WebsiteLayout'

interface PageContainerProps
  extends LocalizedPageProps,
    ComponentWithChildrenProps {}

export const PageContainer = ({ children, language }: PageContainerProps) => (
  <LanguageProvider value={language}>
    <PageMetaTags
      url={process.env.NEXT_PUBLIC_BASE_URL}
      twitterId="@radzionc"
      language={language}
    />
    <CopyProvider value={getCopy(language)}>
      <WebsiteLayout>{children}</WebsiteLayout>
    </CopyProvider>
  </LanguageProvider>
)
