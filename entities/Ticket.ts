export const ticketCategories = ['language', 'law', 'history'] as const
export type TicketCategory = (typeof ticketCategories)[number]

export const ticketCategoryName: Record<TicketCategory, string> = {
  language: 'Language',
  law: 'Law',
  history: 'History',
}

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
