export const interviewQuestionCategories = [
  'introduction',
  'language',
  'origin',
  'family',
  'education',
  'work',
  'residence',
  'investment',
  'citizenship',
  'other',
] as const
export type InterviewQuestionCategory =
  (typeof interviewQuestionCategories)[number]

export type InterviewQuestion = {
  question: string
  answer?: string
  category: InterviewQuestionCategory
}
