import { Language, Ticket } from '@georgian/entities/Ticket'

export const getAnswersForTranslation = (
  { question, answers }: Ticket,
  language: Language,
) => {
  const shouldSelectIncorrectAnswer = question.includes(
    'შემოხაზეთ არასწორი პასუხი',
  )

  return answers
    .filter((answer) => {
      if (answer?.translation?.[language]) return false

      return answer.isCorrect !== shouldSelectIncorrectAnswer
    })
    .map((answer) => answer.content)
}
