import { Language } from '@georgian/internalization/Language'
import { TranslationRecord } from '@georgian/internalization/TranslationRecord'
import { translateTexts } from './translateTexts'
import { arraysToRecord } from '@georgian/utils/array/arraysToRecord'
import { syncTranslationRecordKeys } from './syncTranslationRecordKeys'

interface SyncTranslationsParams {
  existingRecord: TranslationRecord
  texts: string[]
  from: Language
  to: Language
}

export const syncTranslations = async ({
  existingRecord,
  texts,
  from,
  to,
}: SyncTranslationsParams): Promise<TranslationRecord> => {
  const incompleteRecord = syncTranslationRecordKeys(existingRecord, texts)

  const textsToTranslate = Object.keys(incompleteRecord).filter(
    (key) => !incompleteRecord[key],
  )

  const translations = await translateTexts(textsToTranslate, from, to)

  return {
    ...incompleteRecord,
    ...arraysToRecord(textsToTranslate, translations),
  }
}
