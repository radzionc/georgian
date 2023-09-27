import { Ticket, TicketCategory } from '@georgian/entities/Ticket'
import { getLastItem } from '@georgian/utils/array/getLastItem'
import { shouldBeDefined } from '@georgian/utils/shouldBeDefined'

const answerRegex = /^\p{L}\./u

/*
text examples (tickets with prompt):

59. შემოხაზეთ სწორი პასუხი:
ვუთითებთ ტბაზე:
ა. აი, ტბა;
ბ. ვაი, ტბა;
გ. ვუი, ტბა;
დ. უჰ, ტბა.
სწორი პასუხია: ა

63. შემოხაზეთ სწორი პასუხი:
მაღალი - დაბალი; ფართო - ?
ა. მაღალი;
ბ. გრძელი;
გ. მოკლე;
დ. ვიწრო.
სწორი პასუხია: დ

text example (ticket without prompt):
60. შემოხაზეთ სწორი პასუხი:
ა. ის ვინ ხარ?
ბ. მე ვინ არის?
გ. თქვენ ვინ არიან?
დ. შენ ვინ ხარ?
სწორი პასუხია: დ
*/

export const toTicket = (text: string, category: TicketCategory): Ticket => {
  const ticketNumber = Number(text.match(/^\d+/)?.[0])
  const question = shouldBeDefined(text.match(/^\d+\.\s(.*)/)?.[1], 'question')
  const lines = text.split('\n')
  const hasPrompt = lines.length === 7
  const prompt = hasPrompt ? lines[1] : undefined
  const correctAnswer = getLastItem(lines).split('პასუხია: ')[1]

  const answers = lines
    .filter((line) => answerRegex.test(line))
    .map((line) => {
      const [answer, content] = line.split('. ')
      const isCorrect = correctAnswer === answer
      return { content, isCorrect }
    })

  return {
    category,
    ticketNumber,
    question,
    prompt,
    answers,
  }
}
