import { Language } from '@georgian/translation/Language'
import { TranslationRecord } from '@georgian/translation/TranslationRecord'
import { arraysToRecord } from '@georgian/utils/array/arraysToRecord'
import { syncTranslationRecordKeys } from './syncTranslationRecordKeys'
import { translateTexts } from '@georgian/translation/utils/translateTexts'

interface CompleteTranslationsParams {
  existingRecord: TranslationRecord
  texts: string[]
  from: Language
  to: Language
}

export const completeTranslations = async ({
  existingRecord,
  texts,
  from,
  to,
}: CompleteTranslationsParams): Promise<TranslationRecord> => {
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
