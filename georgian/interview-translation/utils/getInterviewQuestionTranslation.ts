import { InterviewQuestion } from '@georgian/entities/InterviewQuestion'
import { TranslationRecord } from '@georgian/languages/TranslationRecord'
import enTranslation from '@georgian/interview-translation/sources/en.json'
import ruTranslation from '@georgian/interview-translation/sources/ru.json'
import { Language } from '@georgian/languages/Language'

const translationRecord: Record<Language, TranslationRecord> = {
  en: enTranslation,
  ru: ruTranslation,
  ka: {},
}

export const getInterviewQuestionTranslation = (
  interviewQuestion: InterviewQuestion,
  language: Language,
): TranslationRecord => {
  const translations = translationRecord[language]

  const textsToTranslate = [interviewQuestion.question]
  const translation: TranslationRecord = {}
  textsToTranslate.forEach((text) => {
    if (translations[text]) {
      translation[text] = translations[text]
    }
  })

  return translation
}
