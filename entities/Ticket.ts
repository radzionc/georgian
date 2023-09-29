export const ticketCategories = ['language', 'law', 'history'] as const
export type TicketCategory = (typeof ticketCategories)[number]

export const ticketCategoryName: Record<TicketCategory, string> = {
  language: 'Language',
  law: 'Law',
  history: 'History',
}

export type Language = 'en' | 'ka'

export const languageName: Record<Language, string> = {
  en: 'English',
  ka: 'Georgian',
}

interface TicketAnswer {
  content: string
  isCorrect: boolean
  translation?: Partial<Record<Language, string>>
}

export interface Ticket {
  category: TicketCategory
  ticketNumber: number
  question: string
  prompt?: string
  answers: TicketAnswer[]
}
