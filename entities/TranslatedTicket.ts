import { TranslationRecord } from '@georgian/internalization/TranslationRecord'
import { Ticket } from './Ticket'

export interface TranslatedTicket extends Ticket {
  translation: TranslationRecord
}
