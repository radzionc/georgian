import { Ticket } from '@georgian/entities/Ticket'

const placeholder = '...'

export const getTextsForTranslation = ({
  question,
  prompt,
  answers,
}: Ticket) => {
  const result = [question]

  const shouldSelectIncorrectAnswer = question.includes(
    'შემოხაზეთ არასწორი პასუხი',
  )

  let answersToTranslate = answers
    .filter((answer) => answer.isCorrect !== shouldSelectIncorrectAnswer)
    .map((answer) => answer.content)

  if (prompt) {
    if (prompt.includes(placeholder)) {
      answersToTranslate = answersToTranslate.map((answer) =>
        prompt.replace(placeholder, answer),
      )
    } else {
      result.push(prompt)
    }
  }

  result.push(...answersToTranslate)

  return result.filter((str) => !/^\d+$/.test(str))
}
