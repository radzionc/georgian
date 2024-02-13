import { extractTextTickets } from './utils/extractTextTickets'
import { TicketCategory } from '@georgian/entities/Ticket'
import fs from 'fs'
import { formatText } from './utils/formatText'
import { getTicketsFilePath } from './utils/getTickesFilePath'

export const formatTicketsSources = async (category: TicketCategory) => {
  const filePath = getTicketsFilePath(category)
  const rawText = fs.readFileSync(filePath, 'utf-8')
  const text = formatText(rawText)
  fs.writeFileSync(filePath, text)

  const textTickets = extractTextTickets(text)
  fs.writeFileSync(filePath, textTickets.join('\n\n'))
}

const category = process.argv[2] as TicketCategory

formatTicketsSources(category)
