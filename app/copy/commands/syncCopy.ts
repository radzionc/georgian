import fs from 'fs'
import path from 'path'
import { TargetLanguage } from '@georgian/translation/Language'
import { attempt } from '@georgian/utils/attempt'
import { translateTexts } from '@georgian/translation/utils/translateTexts'
import { makeRecord } from '@georgian/utils/makeRecord'
import { createJsonFile } from '@georgian/codegen/utils/createJsonFile'

const translationsDirectory = path.resolve(__dirname, '../')

const getTranslationFilePath = (language: TargetLanguage) =>
  path.resolve(translationsDirectory, `${language}.json`)

const getTransaltions = (language: TargetLanguage) => {
  return attempt(
    () =>
      JSON.parse(fs.readFileSync(getTranslationFilePath(language), 'utf-8')),
    {},
  )
}

const sourceLanguage: TargetLanguage = 'en'
const translateIntoLanguages: TargetLanguage[] = ['ru']

const syncCopy = async () => {
  const sourceCopy = getTransaltions(sourceLanguage)
  await Promise.all(
    translateIntoLanguages.map(async (targetLanguage) => {
      const copy = getTransaltions(targetLanguage)
      const sourceKeys = Object.keys(sourceCopy)
      const targetKeys = Object.keys(copy)
      const missingKeys = sourceKeys.filter((key) => !targetKeys.includes(key))
      const textsToTranslate = missingKeys.map((key) => sourceCopy[key])
      const translations = await translateTexts(
        textsToTranslate,
        sourceLanguage,
        targetLanguage,
      )
      const result = makeRecord(sourceKeys, (key) =>
        missingKeys.includes(key)
          ? translations[missingKeys.indexOf(key)]
          : copy[key],
      )

      createJsonFile({
        directory: translationsDirectory,
        fileName: targetLanguage,
        content: JSON.stringify(result),
      })
    }),
  )
}

syncCopy()
