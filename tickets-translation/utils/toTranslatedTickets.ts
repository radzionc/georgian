import { Ticket } from '@georgian/entities/Ticket'
import { getTextsForTranslation } from './getTextsForTranslation'
import { TranslationRecord } from '../../translation/TranslationRecord'
import enTranslation from '@georgian/tickets-translation/sources/en.json'
import ruTranslation from '@georgian/tickets-translation/sources/ru.json'

import { TargetLanguage } from '../../translation/Language'

const translationRecord: Record<TargetLanguage, TranslationRecord> = {
  en: enTranslation,
  ru: ruTranslation,
}

export const toTranslatedTickets = (
  tickets: Ticket[],
  language: TargetLanguage,
) => {
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
