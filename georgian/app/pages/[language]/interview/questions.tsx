import { GetStaticPaths, GetStaticProps } from 'next'
import { PageContainer } from '../../../components/PageContainer'
import { LocalizedPageProps } from '../../../copy/LocalizedPageProps'

import { ParsedUrlQuery } from 'querystring'
import { Language, languages } from '@georgian/languages/Language'
import {
  CuratedQuestionsPage,
  CuratedQuestionsPageProps,
} from '../../../interview/CuratedQuestions/CuratedQuestionsPage'
import { interviewQuestions } from '@georgian/data/sources/interviewQuestions'
import { enhanceInterviewQuestion } from '../../../utils/enhanceInterviewQuestion'

export default ({
  language,
  ...rest
}: LocalizedPageProps & CuratedQuestionsPageProps) => (
  <PageContainer isTranslated={true} language={language}>
    <CuratedQuestionsPage {...rest} />
  </PageContainer>
)

interface Params extends ParsedUrlQuery {
  language: Language
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = languages.map((language) => ({
    params: { language },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<
  CuratedQuestionsPageProps & LocalizedPageProps,
  Params
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const { language } = params

  return {
    props: {
      questions: interviewQuestions.map((value) =>
        enhanceInterviewQuestion({ value, language }),
      ),
      language,
    },
  }
}
