import { TranslationRecord } from '../languages/TranslationRecord'
import { Ticket } from './Ticket'

export interface TranslatedTicket extends Ticket {
  translation: TranslationRecord
}
