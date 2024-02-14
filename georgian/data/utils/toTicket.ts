import {
  Ticket,
  TicketCategory,
  TicketHighlight,
  EntityWithHighlights,
} from '@georgian/entities/Ticket'

const answerRegex = /^\p{L}[.).]/u

const getHighlights = (markdown: string): TicketHighlight[] => {
  const result: TicketHighlight[] = []
  const parts = markdown.split('**')
  let currentIndex = 0

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      // Highlighted parts are at odd indices
      result.push({
        start: currentIndex,
        end: currentIndex + parts[i].length,
      })
    }
    currentIndex += parts[i].length
  }

  return result
}

const toEntityWithHighlights = (markdown: string): EntityWithHighlights => {
  const content = getContent(markdown)
  const highlights = getHighlights(markdown)
  return { content, highlights }
}

const getContent = (mardkown: string) => mardkown.replace(/\*\*/g, '')

const getCorrectAnswer = (text: string) => {
  const correctAnswerText = 'სწორი პასუხია'
  const [, after] = text.split(correctAnswerText)
  if (!after) {
    throw new Error(['Could not find correct answer: ', text].join('/n'))
  }

  const answer = after.replace(':', '').replace(' ', '')[0]
  if (!answer) {
    throw new Error(['Could not find correct answer: ', text].join('/n'))
  }

  return answer
}

const getPrompt = (text: string, category: TicketCategory) => {
  const lines = text.split('\n')
  const hasPrompt = category === 'language' && lines.length === 7
  return hasPrompt ? lines[1] : undefined
}

const getQuestion = (text: string) => {
  const regex = /(?<=\d+\.\s)(.*?[:?])/gs
  const result = text.match(regex)?.[0]
  if (!result) {
    throw new Error(['Could not find question: ', text].join('/n'))
  }

  return result.replace('\n', '')
}

export const toTicket = (
  markdown: string,
  category: TicketCategory,
): Ticket => {
  const ticketNumber = Number(markdown.match(/^\d+/)?.[0])
  const lines = markdown.split('\n')

  const correctAnswer = getCorrectAnswer(markdown)

  const answers = lines
    .filter((line) => answerRegex.test(line))
    .map((line) => {
      const answer = line[0]
      let content = line.slice(3).replace('\n', '')
      if (content.endsWith(';')) {
        content = content.slice(0, -1)
      } else if (content.endsWith('.')) {
        content = content.slice(0, -1)
      }
      const isCorrect = correctAnswer === answer

      return {
        isCorrect,
        ...toEntityWithHighlights(content),
      }
    })

  if (answers.length !== 4) {
    throw new Error(['Could not find answers: ', markdown].join('/n'))
  }

  return {
    category,
    ticketNumber,
    question: toEntityWithHighlights(getQuestion(markdown)),
    prompt: getPrompt(markdown, category),
    answers,
  }
}
