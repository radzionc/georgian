import { Ticket } from '@georgian/entities/Ticket'
import { getTextsForTranslation } from './getTextsForTranslation'
import { TranslationRecord } from '@georgian/languages/TranslationRecord'
import enTranslation from '@georgian/tickets-translation/sources/en.json'
import ruTranslation from '@georgian/tickets-translation/sources/ru.json'
import { Language } from '@georgian/languages/Language'

const translationRecord: Record<Language, TranslationRecord> = {
  en: enTranslation,
  ru: ruTranslation,
  ka: {},
}

export const getTicketTranslation = (
  ticket: Ticket,
  language: Language,
): TranslationRecord => {
  const translations = translationRecord[language]

  const textsToTranslate = getTextsForTranslation(ticket)
  const translation: TranslationRecord = {}
  textsToTranslate.forEach((text) => {
    if (translations[text]) {
      translation[text] = translations[text]
    }
  })

  return translation
}
