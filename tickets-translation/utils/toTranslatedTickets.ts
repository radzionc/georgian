import { Ticket } from '@georgian/entities/Ticket'
import { getTextsForTranslation } from './getTextsForTranslation'
import { TranslationRecord } from '@georgian/internalization/TranslationRecord'
import englishTranslation from '@georgian/tickets-translation/sources/en.json'

export const toTranslatedTickets = (tickets: Ticket[]) => {
  const translations = englishTranslation as TranslationRecord

  return tickets.map((ticket) => {
    const textsToTranslate = getTextsForTranslation(ticket)
    const translation: TranslationRecord = {}
    textsToTranslate.map((text) => {
      translation[text] = translations[text]
    })

    return {
      ...ticket,
      translation,
    }
  })
}
