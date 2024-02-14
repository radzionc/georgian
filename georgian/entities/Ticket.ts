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

export type TicketHighlight = {
  start: number
  end: number
}

export type EntityWithHighlights = {
  content: string
  highlights?: TicketHighlight[]
}

type TicketAnswer = EntityWithHighlights & {
  isCorrect: boolean
}

export type Ticket = {
  category: TicketCategory
  ticketNumber: number
  question: EntityWithHighlights
  prompt?: string
  answers: TicketAnswer[]
}

export type EntityWithHighlightsSegment = {
  content: string
  isHighlighted: boolean
}
