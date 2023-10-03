import { Ticket } from '@georgian/entities/Ticket'
import { PersistentStateKey, usePersistentState } from 'state/persistentState'

type TicketId = Pick<Ticket, 'category' | 'ticketNumber'>

export const useCompletedTickets = () => {
  return usePersistentState<TicketId[]>(PersistentStateKey.CompleteTickets, [])
}

const areTicketsEqual = (a: TicketId, b: TicketId) => {
  return a.category === b.category && a.ticketNumber === b.ticketNumber
}

export const withoutTicket = (tickets: TicketId[], ticket: TicketId) => {
  return tickets.filter((t) => !areTicketsEqual(t, ticket))
}

export const isTicketCompleted = (tickets: TicketId[], ticket: TicketId) => {
  return tickets.some((t) => areTicketsEqual(t, ticket))
}
