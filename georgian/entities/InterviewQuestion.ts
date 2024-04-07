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
] as const
export type InterviewQuestionCategory =
  (typeof interviewQuestionCategories)[number]

export type InterviewQuestion = {
  question: string
  answer?: string
  category: InterviewQuestionCategory
}
