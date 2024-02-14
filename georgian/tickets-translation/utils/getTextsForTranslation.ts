import { Ticket } from '@georgian/entities/Ticket'
import { extractHighlights } from '@georgian/entities-utils/ticket/extractHighlights'

export const promptPlaceholder = '...'

export const getTextsForTranslation = ({
  question,
  prompt,
  answers,
}: Ticket) => {
  const result = [question.content]

  const shouldSelectIncorrectAnswer = question.content.includes(
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

  const highlights = [...answers, question].flatMap((entity) =>
    extractHighlights(entity),
  )

  result.push(...answersToTranslate, ...highlights)

  return result.filter((str) => !/^\d+$/.test(str))
}
