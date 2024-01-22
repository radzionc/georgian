import { translateTexts } from '@georgian/languages/utils/translateTexts'
import { makeRecord } from '@georgian/utils/makeRecord'
import { createJsonFile } from '@georgian/codegen/utils/createJsonFile'
import { generateCopy } from './utils/generateCopy'
import { generateCopyType } from './utils/generateCopyType'
import { languages, primaryLanguage } from '@georgian/languages/Language'
import { without } from '@georgian/utils/array/without'
import { copySourceDirectory, getCopySource } from './utils/getCopySource'
import { generateGetCopy } from './utils/generateGetCopy'

const syncCopy = async () => {
  const sourceCopy = getCopySource(primaryLanguage)

  await Promise.all(
    without(languages, primaryLanguage).map(async (targetLanguage) => {
      const copy = getCopySource(targetLanguage)
      const sourceKeys = Object.keys(sourceCopy)
      const targetKeys = Object.keys(copy)
      const missingKeys = without(sourceKeys, ...targetKeys)

      const textsToTranslate = missingKeys.map((key) => sourceCopy[key])
      const translations = await translateTexts({
        texts: textsToTranslate,
        from: primaryLanguage,
        to: targetLanguage,
      })

      const result = makeRecord(sourceKeys, (key) =>
        missingKeys.includes(key)
          ? translations[missingKeys.indexOf(key)]
          : copy[key],
      )

      return createJsonFile({
        directory: copySourceDirectory,
        fileName: targetLanguage,
        content: JSON.stringify(result),
      })
    }),
  )

  await Promise.all([
    generateCopyType(sourceCopy),
    ...languages.map(generateCopy),
    generateGetCopy(),
  ])
}

syncCopy()
