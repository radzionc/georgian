import { CountryCode } from '@lib/countries'
import { TicketCategory, ticketCategories } from './Ticket'
import { makeRecord } from '@lib/utils/record/makeRecord'

export type UserCompletedTickets = Record<TicketCategory, number[]>

type LifeTimeDealProvider = 'paddle'

export type LifeTimeDeal = {
  provider: LifeTimeDealProvider
}

export type User = {
  id: string
  email: string
  country?: CountryCode
  name?: string

  createdAt: number
  updatedAt: number

  completedTickets: UserCompletedTickets

  firstTestCompletedAt?: number

  lifeTimeDeal?: LifeTimeDeal
}

export const userReadonlyFields = [
  'id',
  'email',
  'createdAt',
  'updatedAt',
  'lifeTimeDeal',
] as const

export type UserReadonlyFields = (typeof userReadonlyFields)[number]

export type UserEditableFields = Exclude<keyof User, UserReadonlyFields>

export const userDefaultFields: Pick<User, 'completedTickets'> = {
  completedTickets: makeRecord(ticketCategories, () => []),
}
