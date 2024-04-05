import { TranslationRecord } from '@georgian/languages/TranslationRecord'
import { InterviewQuestion } from './InterviewQuestion'

export type EnhancedInterviewQuestion = InterviewQuestion & {
  translation: TranslationRecord
}
