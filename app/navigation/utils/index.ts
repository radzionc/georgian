import { TicketCategory } from '@georgian/entities/Ticket'

export const getTicketCategoryPath = (category: TicketCategory) =>
  `/${category}`

export const getCategoryTestPagePath = (category: TicketCategory) =>
  `/${category}/test`
