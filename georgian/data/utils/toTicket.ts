import { Ticket, TicketCategory } from '@georgian/entities/Ticket'

const answerRegex = /^\p{L}[.).]/u

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

export const toTicket = (text: string, category: TicketCategory): Ticket => {
  const ticketNumber = Number(text.match(/^\d+/)?.[0])
  const lines = text.split('\n')

  const correctAnswer = getCorrectAnswer(text)

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

      return { content, isCorrect }
    })

  if (answers.length !== 4) {
    throw new Error(['Could not find answers: ', text].join('/n'))
  }

  return {
    category,
    ticketNumber,
    question: getQuestion(text),
    prompt: getPrompt(text, category),
    answers,
  }
}
