import { Ticket } from '@georgian/entities/Ticket'

export const promptPlaceholder = '...'

export const getTextsForTranslation = ({
  question,
  prompt,
  answers,
}: Ticket) => {
  const result = [question]

  const shouldSelectIncorrectAnswer = question.includes(
    'შემოხაზეთ არასწორი პასუხი',
  )

  let answersToTranslate = (
    shouldSelectIncorrectAnswer
      ? answers
      : answers.filter((answer) => answer.isCorrect)
  ).map((answer) => answer.content)

  if (prompt) {
    if (prompt.includes(promptPlaceholder)) {
      answersToTranslate = answersToTranslate.map((answer) =>
        prompt.replace(promptPlaceholder, answer),
      )
    } else {
      result.push(prompt)
    }
  }

  result.push(...answersToTranslate)

  return result.filter((str) => !/^\d+$/.test(str))
}
