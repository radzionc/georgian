export const interviewQuestionTags = [
  'introduction',
  'language',
  'education',
  'origin',
  'work',
  'residence',
  'citizenship',
  'family',
] as const
type InterviewQuestionTag = (typeof interviewQuestionTags)[number]

export type InterviewQuestion = {
  question: string
  answer?: string
  tags: InterviewQuestionTag[]
}
