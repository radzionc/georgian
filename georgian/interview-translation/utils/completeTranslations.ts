import { Language } from '@georgian/languages/Language'
import { TranslationRecord } from '@georgian/languages/TranslationRecord'
import { arraysToRecord } from '@lib/utils/array/arraysToRecord'
import { syncTranslationRecordKeys } from './syncTranslationRecordKeys'
import { translateTexts } from '@georgian/languages/utils/translateTexts'

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

  const translations = await translateTexts({
    texts: textsToTranslate,
    from,
    to,
  })

  return {
    ...incompleteRecord,
    ...arraysToRecord(textsToTranslate, translations),
  }
}
