import { interviewQuestions } from '../sources/interviewQuestions'
import { getInterviewQuestionHash } from '../utils/getInterviewQuestionHash'

const interviewQuestionsHashes = () => {
  const result = interviewQuestions
    .map((question) =>
      [question.question, getInterviewQuestionHash(question)].join('\n'),
    )
    .join(`\n\n`)
  console.log(result)
}

interviewQuestionsHashes()
