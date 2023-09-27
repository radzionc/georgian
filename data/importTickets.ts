import path from 'path'
import { getPdfText } from './utils/getPdfText'
import { formatPdfText } from './utils/formatPdfText'
import { extractTextTickets } from './utils/extractTextTickets'
import { TicketCategory } from '@georgian/entities/Ticket'
import { toTicket } from './utils/toTicket'
import { putTicket } from '@georgian/db/tickets'

const getSourceFile = (name: string) =>
  path.resolve(__dirname, `./sources/${name}.pdf`)

export const importTickets = async (category: TicketCategory) => {
  const filePath = getSourceFile(category)
  const pdf = await getPdfText(filePath)
  const formattedPdf = formatPdfText(pdf)
  const textTickets = extractTextTickets(formattedPdf)

  const tickets = textTickets.map((text) => toTicket(text, category))

  await Promise.all(tickets.map(putTicket))
}

importTickets('language')
