import fs from 'fs'
import path from 'path'
import { attempt } from '@georgian/utils/attempt'
import { translateTexts } from '@georgian/languages/utils/translateTexts'
import { makeRecord } from '@georgian/utils/makeRecord'
import { createJsonFile } from '@georgian/codegen/utils/createJsonFile'
import { generateCopy } from './utils/generateCopy'
import { generateCopyType } from './utils/generateCopyType'
import { Language, languages } from '@georgian/languages/Language'
import { without } from '@georgian/utils/array/without'

const translationsDirectory = path.resolve(__dirname, '../')

const getTranslationFilePath = (language: Language) =>
  path.resolve(translationsDirectory, `${language}.json`)

const getTransaltions = (language: Language) => {
  return attempt(
    () =>
      JSON.parse(fs.readFileSync(getTranslationFilePath(language), 'utf-8')),
    {},
  )
}

const sourceLanguage: Language = 'en'
const translateIntoLanguages: Language[] = without(languages, sourceLanguage)

const syncCopy = async () => {
  const sourceCopy = getTransaltions(sourceLanguage)
  await Promise.all(
    translateIntoLanguages.map(async (targetLanguage) => {
      const copy = getTransaltions(targetLanguage)
      const sourceKeys = Object.keys(sourceCopy)
      const targetKeys = Object.keys(copy)
      const missingKeys = sourceKeys.filter((key) => !targetKeys.includes(key))
      console.log(`Translating ${missingKeys.length} keys to ${targetLanguage}`)
      return
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

  await generateCopyType(sourceCopy)

  const languages = [sourceLanguage, ...translateIntoLanguages]
  await Promise.all(languages.map(generateCopy))
}

syncCopy()
