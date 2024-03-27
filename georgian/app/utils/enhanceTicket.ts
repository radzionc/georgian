import { EnhancedTicket } from '@georgian/entities/EnhancedTicket'
import { Ticket } from '@georgian/entities/Ticket'
import { Language } from '@georgian/languages/Language'
import { getTicketTranslation } from '@georgian/tickets-translation/utils/getTicketTranslation'
import path from 'path'
import fs from 'fs'

type EnhanceTicketInput = {
  ticket: Ticket
  language: Language
}

export const enhanceTicket = ({
  ticket,
  language,
}: EnhanceTicketInput): EnhancedTicket => {
  const result: EnhancedTicket = {
    ...ticket,
    translation: getTicketTranslation(ticket, language),
  }

  const imageUrl = `/images/tickets/${ticket.category}/${ticket.ticketNumber}.webp`
  const imagePath = path.join(process.cwd(), `public/${imageUrl}`)
  if (fs.existsSync(imagePath)) {
    result.imageUrl = imageUrl
  }

  return result
}
