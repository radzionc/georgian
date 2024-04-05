import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { InterviewQuestion } from '@georgian/entities/InterviewQuestion'
import { Language } from '@georgian/languages/Language'
import { getInterviewQuestionTranslation } from '@georgian/interview-translation/utils/getInterviewQuestionTranslation'

type EnhanceInterviewQuestionInput = {
  value: InterviewQuestion
  language: Language
}

export const enhanceInterviewQuestion = ({
  value,
  language,
}: EnhanceInterviewQuestionInput): EnhancedInterviewQuestion => {
  const result: EnhancedInterviewQuestion = {
    ...value,
    translation: getInterviewQuestionTranslation(value, language),
  }

  return result
}
