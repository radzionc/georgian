import { Ticket } from '@georgian/entities/Ticket'
import { getTextsForTranslation } from './getTextsForTranslation'
import { TranslationRecord } from '../../languages/TranslationRecord'
import enTranslation from '@georgian/tickets-translation/sources/en.json'
import ruTranslation from '@georgian/tickets-translation/sources/ru.json'
import { Language } from '@georgian/languages/Language'

const translationRecord: Record<Language, TranslationRecord> = {
  en: enTranslation,
  ru: ruTranslation,
  ka: {},
}

export const toTranslatedTickets = (tickets: Ticket[], language: Language) => {
  const translations = translationRecord[language]

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
