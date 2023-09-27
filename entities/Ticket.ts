export type TicketCategory = 'language' | 'law' | 'history'

interface TicketAnswer {
  content: string
  isCorrect: boolean
}

export interface Ticket {
  category: TicketCategory
  ticketNumber: number
  question: string
  prompt?: string
  answers: TicketAnswer[]
}
