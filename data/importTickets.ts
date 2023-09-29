import path from 'path'
import { TicketCategory } from '@georgian/entities/Ticket'
import { toTicket } from './utils/toTicket'
import { deleteAllTicketsInCategory, putTicket } from '@georgian/db/tickets'
import fs from 'fs'

const getSourceFile = (name: string) =>
  path.resolve(__dirname, `./sources/${name}.txt`)

export const importTickets = async (category: TicketCategory) => {
  const filePath = getSourceFile(category)
  const text = fs.readFileSync(filePath, 'utf-8')
  const textTickets = text.split('\n\n')

  const tickets = textTickets.map((text) => toTicket(text, category))

  await deleteAllTicketsInCategory(category)

  await Promise.all(tickets.map(putTicket))
}

const category = process.argv[2] as TicketCategory

importTickets(category)
