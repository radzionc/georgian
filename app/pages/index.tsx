import { LandingPage } from 'landing/LandingPage'
import { TranslationProvider } from 'copy/TranslationProvider'
import { WebsiteLayout } from 'layout/components/WebsiteLayout'
import Head from 'next/head'
import { primaryLanguage } from '@georgian/languages/Language'

export default () => (
  <TranslationProvider language={primaryLanguage}>
    <WebsiteLayout>
      <Head>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/${primaryLanguage}`}
        />
      </Head>
      <LandingPage />
    </WebsiteLayout>
  </TranslationProvider>
)
