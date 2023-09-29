import { TicketCategory } from '@georgian/entities/Ticket'

export const getTicketCategoryPath = (ticketCategory: TicketCategory) =>
  `/${ticketCategory}`
