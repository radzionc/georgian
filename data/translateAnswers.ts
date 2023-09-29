import { getAllTicketsInCategory, updateTicket } from '@georgian/db/tickets'
import { Language, TicketCategory } from '@georgian/entities/Ticket'
import { toBatches } from '@georgian/utils/array/toBatches'
import { translate } from './utils/translate'
import { getAnswersForTranslation } from './utils/getAnswersForTranslation'

const translateAnswers = async (
  category: TicketCategory,
  toLanguage: Language,
) => {
  const allTickets = await getAllTicketsInCategory(category)
  const batches = toBatches(allTickets, 50)

  await Promise.all(
    batches.map(async (tickets) => {
      const answersToTranslate = tickets.map((ticket) =>
        getAnswersForTranslation(ticket, toLanguage),
      )
      const flatAnswers = answersToTranslate.flat()
      if (!flatAnswers.length) return

      const translations = await translate(flatAnswers, 'ka', toLanguage)
      console.log(`Translated ${translations.length} texts`)

      const translationsRecord = flatAnswers.reduce(
        (acc, item, index) => {
          return {
            ...acc,
            [item]: translations[index],
          }
        },
        {} as Record<string, string>,
      )

      await Promise.all(
        tickets.map(async (ticket, index) => {
          if (answersToTranslate[index].length === 0) {
            return
          }

          const answers = ticket.answers.map((answer) => {
            const translation = translationsRecord[answer.content]

            if (!translation) return answer

            return {
              ...answer,
              translation: {
                ...answer.translation,
                [toLanguage]: translation,
              },
            }
          })

          await updateTicket(
            {
              category: ticket.category,
              ticketNumber: ticket.ticketNumber,
            },
            { answers },
          )
          console.log(`Updated ticket #${ticket.ticketNumber}`)
        }),
      )
    }),
  )
}

const category = process.argv[2] as TicketCategory
const toLanguage = process.argv[3] as Language

translateAnswers(category, toLanguage)
