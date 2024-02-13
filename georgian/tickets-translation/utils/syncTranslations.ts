import fs from 'fs'
import { Language, primaryLanguage } from '@georgian/languages/Language'
import {
  getTextsForTranslation,
  getTranslations,
  getTranslationsFilePath,
} from './sources'
import { syncTranslationRecordKeys } from './syncTranslationRecordKeys'
import { arraysToRecord } from '@lib/utils/array/arraysToRecord'
import { translateTexts } from '@georgian/languages/utils/translateTexts'

const sourceLanguage: Language = 'ka'

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
  const translations = await translateTexts({
    texts: textsToTranslate,
    from: isPrimaryLanguage ? sourceLanguage : primaryLanguage,
    to: language,
  })

  const result = {
    ...incompleteRecord,
    ...arraysToRecord(sourceTextsToTranslate, translations),
  }

  fs.writeFileSync(getTranslationsFilePath(language), JSON.stringify(result))
}
