export const interviewQuestionTags = ['introduction', 'education'] as const
type InterviewQuestionTag = (typeof interviewQuestionTags)[number]

export type InterviewQuestion = {
  question: string
  answer: string
  tags: InterviewQuestionTag[]
}
