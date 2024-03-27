import { TranslationRecord } from '@georgian/languages/TranslationRecord'
import { Ticket } from './Ticket'

export type EnhancedTicket = Ticket & {
  translation: TranslationRecord
  imageUrl?: string
}
