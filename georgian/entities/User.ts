import { CountryCode } from '@lib/countries'
import { TicketCategory, ticketCategories } from './Ticket'
import { makeRecord } from '@lib/utils/record/makeRecord'

export type UserCompletedTickets = Record<TicketCategory, number[]>

export type User = {
  id: string
  email: string
  country?: CountryCode
  name?: string

  createdAt: number
  updatedAt: number

  completedTickets: UserCompletedTickets
}

export const userDefaultFields: Pick<User, 'completedTickets'> = {
  completedTickets: makeRecord(ticketCategories, () => []),
}
