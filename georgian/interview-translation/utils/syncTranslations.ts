import { Language } from '@georgian/languages/Language'
import {
  getTextsForTranslation,
  getTranslations,
  translationsPath,
} from './sources'
import { syncTranslationRecordKeys } from './syncTranslationRecordKeys'
import { arraysToRecord } from '@lib/utils/array/arraysToRecord'
import { translateTexts } from '@georgian/languages/utils/translateTexts'
import { createJsonFile } from '@lib/codegen/utils/createJsonFile'

const sourceLanguage: Language = 'ka'

export const syncTranslations = async (language: Language) => {
  const incompleteRecord = syncTranslationRecordKeys(
    getTranslations(language),
    getTextsForTranslation(),
  )

  const sourceTextsToTranslate = Object.keys(incompleteRecord).filter(
    (key) => !incompleteRecord[key],
  )

  console.log(
    `Translating ${sourceTextsToTranslate.length} texts to ${language}`,
  )

  const translations = await translateTexts({
    texts: sourceTextsToTranslate,
    from: sourceLanguage,
    to: language,
  })

  const content = {
    ...incompleteRecord,
    ...arraysToRecord(sourceTextsToTranslate, translations),
  }

  createJsonFile({
    directory: translationsPath,
    fileName: language,
    content: JSON.stringify(content),
  })
}
