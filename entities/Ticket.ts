export const ticketCategories = ['language', 'law', 'history'] as const
export type TicketCategory = (typeof ticketCategories)[number]

export const ticketCategoryName: Record<TicketCategory, string> = {
  language: 'Language',
  law: 'Law',
  history: 'History',
}

export const ticketAnswerLetters = ['ა', 'ბ', 'გ', 'დ']

export const ticketCategoryEmoji: Record<TicketCategory, string> = {
  language: '🗣',
  law: '📜',
  history: '🏰',
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
