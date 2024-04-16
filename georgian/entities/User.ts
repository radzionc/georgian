import { CountryCode } from '@lib/countries'
import { TicketCategory } from './Ticket'

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
