import Head from 'next/head'
import { primaryLanguage } from '@georgian/languages/Language'
import { PageContainer } from '../components/PageContainer'
import { LandingPage } from '../landing/LandingPage'

export default () => (
  <PageContainer language={primaryLanguage}>
    <Head>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${primaryLanguage}`}
      />
    </Head>
    <LandingPage />
  </PageContainer>
)
