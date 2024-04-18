import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { InterviewQuestion } from '@georgian/entities/InterviewQuestion'
import { Language } from '@georgian/languages/Language'
import { getInterviewQuestionTranslation } from '@georgian/interview-translation/utils/getInterviewQuestionTranslation'
import { getInterviewQuestionHash } from '@georgian/data/utils/getInterviewQuestionHash'
import path from 'path'
import fs from 'fs'

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

  const hash = getInterviewQuestionHash(value)
  const questionAudioUrl = `/audio/${hash}.m4a`
  const audioPath = path.join(process.cwd(), `public/${questionAudioUrl}`)
  if (fs.existsSync(audioPath)) {
    result.questionAudioUrl = questionAudioUrl
  } else {
    console.log(
      `Missing audio file for a question:\n ${value.question}\n Hash: ${hash}`,
    )
  }

  return result
}
