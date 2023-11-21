import { LandingPage } from 'landing/LandingPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { languages } from '@georgian/languages/Language'
import { LocalizedPageProps } from 'copy/LocalizedPageProps'
import { PageContainer } from 'components/PageContainer'

export default ({ language }: LocalizedPageProps) => (
  <PageContainer language={language}>
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
