import { InterviewQuestion } from '@georgian/entities/InterviewQuestion'
import { createHash } from 'crypto'

export const getInterviewQuestionHash = ({ question }: InterviewQuestion) => {
  return createHash('sha256').update(question).digest('hex')
}
