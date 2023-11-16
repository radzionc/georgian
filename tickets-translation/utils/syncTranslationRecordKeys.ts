import { TranslationRecord } from '@georgian/translation/TranslationRecord'

export const syncTranslationRecordKeys = (
  record: TranslationRecord,
  keys: string[],
) => {
  const result: TranslationRecord = {}
  keys.forEach((key) => {
    result[key] = record[key] || ''
  })

  return result
}
