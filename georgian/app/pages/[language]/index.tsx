import Head from 'next/head'
import { PageContainer } from '../../components/PageContainer'
import { LocalizedPageProps } from '../../copy/LocalizedPageProps'
import { LandingPage } from '../../landing/LandingPage'
import {
  getStaticPaths,
  getStaticProps,
} from '@georgian/app/navigation/pages/translatedPage'

export default ({ language }: LocalizedPageProps) => (
  <PageContainer isTranslated={true} language={language}>
    <Head>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${language}`}
      />
    </Head>
    <LandingPage />
  </PageContainer>
)

export { getStaticPaths, getStaticProps }
