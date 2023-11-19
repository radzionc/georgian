import { LandingPage } from 'landing/LandingPage'
import { WebsiteLayout } from 'layout/components/WebsiteLayout'
import Head from 'next/head'
import { primaryLanguage } from '@georgian/languages/Language'
import { LanguageProvider } from '@georgian/languages-ui/components/LanguageProvider'
import { CopyProvider } from 'copy/CopyProvider'
import { getCopy } from 'copy/getCopy'

const copy = getCopy(primaryLanguage)

export default () => (
  <LanguageProvider value={primaryLanguage}>
    <CopyProvider value={copy}>
      <WebsiteLayout>
        <Head>
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/${primaryLanguage}`}
          />
        </Head>
        <LandingPage />
      </WebsiteLayout>
    </CopyProvider>
  </LanguageProvider>
)
