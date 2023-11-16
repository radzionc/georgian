import { TranslationRecord } from '../translation/TranslationRecord'
import { Ticket } from './Ticket'

export interface TranslatedTicket extends Ticket {
  translation: TranslationRecord
}
