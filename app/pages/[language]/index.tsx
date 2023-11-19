import { LandingPage } from 'landing/LandingPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { languages } from '@georgian/languages/Language'
import { LocalizedPageProps } from 'copy/LocalizedPageProps'
import { LanguageProvider } from '@georgian/languages-ui/components/LanguageProvider'
import { CopyProvider } from 'copy/CopyProvider'
import { WebsiteLayout } from 'layout/components/WebsiteLayout'
import { getCopy } from 'copy/getCopy'

export default ({ language }: LocalizedPageProps) => (
  <LanguageProvider value={language}>
    <CopyProvider value={getCopy(language)}>
      <WebsiteLayout>
        <LandingPage />
      </WebsiteLayout>
    </CopyProvider>
  </LanguageProvider>
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
