import { TranslatedPageProps } from 'copy/TranslatedPageProps'
import { LandingPage } from 'landing/LandingPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { withTranslation } from 'copy/withTranlation'
import { withWebsiteLayout } from 'layout/withWebsiteLayout'
import { languages } from '@georgian/languages/Language'

export default withTranslation(withWebsiteLayout(LandingPage))

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: languages.map((language) => ({
      params: { language },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  TranslatedPageProps,
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
