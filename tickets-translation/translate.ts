import fs from 'fs'
import { Language } from '../internalization/Language'
import {
  getTextsForTranslation,
  getTranslations,
  getTranslationsFilePath,
} from './utils/sources'
import { syncTranslationRecordKeys } from './utils/syncTranslationRecordKeys'
import { translateTexts } from './utils/translateTexts'
import { arraysToRecord } from '@georgian/utils/array/arraysToRecord'

const sourceLanguage: Language = 'ka'
const primaryLanguage: Language = 'en'

export const translate = async (language: Language) => {
  const isPrimaryLanguage = language === primaryLanguage
  if (!isPrimaryLanguage) {
    await translate(primaryLanguage)
  }

  const incompleteRecord = syncTranslationRecordKeys(
    getTranslations(language),
    getTextsForTranslation(),
  )

  const sourceTextsToTranslate = Object.keys(incompleteRecord).filter(
    (key) => !incompleteRecord[key],
  )

  let textsToTranslate = sourceTextsToTranslate
  if (!isPrimaryLanguage) {
    const primaryLanguageTranslations = getTranslations(primaryLanguage)
    textsToTranslate = sourceTextsToTranslate.map(
      (text) => primaryLanguageTranslations[text],
    )
  }

  console.log(`Translating ${textsToTranslate.length} texts to ${language}`)
  const translations = await translateTexts(
    textsToTranslate,
    isPrimaryLanguage ? sourceLanguage : primaryLanguage,
    language,
  )

  const result = {
    ...incompleteRecord,
    ...arraysToRecord(sourceTextsToTranslate, translations),
  }

  fs.writeFileSync(getTranslationsFilePath(language), JSON.stringify(result))
}

const language = process.argv[2] as Language

translate(language)
