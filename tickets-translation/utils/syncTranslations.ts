import fs from 'fs'
import { Language } from '@georgian/translation/Language'
import {
  getTextsForTranslation,
  getTranslations,
  getTranslationsFilePath,
} from './sources'
import { syncTranslationRecordKeys } from './syncTranslationRecordKeys'
import { arraysToRecord } from '@georgian/utils/array/arraysToRecord'
import { translateTexts } from '@georgian/translation/utils/translateTexts'

const sourceLanguage: Language = 'ka'
const primaryLanguage: Language = 'en'

export const syncTranslations = async (language: Language) => {
  const isPrimaryLanguage = language === primaryLanguage
  if (!isPrimaryLanguage) {
    await syncTranslations(primaryLanguage)
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
