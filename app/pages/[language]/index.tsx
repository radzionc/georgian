import { LandingPage } from 'landing/LandingPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { languages } from '@georgian/languages/Language'
import { LocalizedPageProps } from 'copy/LocalizedPageProps'
import { PageContainer } from 'components/PageContainer'
import Head from 'next/head'

export default ({ language }: LocalizedPageProps) => (
  <PageContainer language={language}>
    <Head>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/${language}`}
      />
    </Head>
    <LandingPage />
  </PageContainer>
)

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: languages.map((language) => ({
      params: { language },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  LocalizedPageProps,
  Params
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      language: params.language,
    },
  }
}
