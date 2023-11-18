import { Language } from '@georgian/languages/Language'
import { attempt } from '@georgian/utils/attempt'
import fs from 'fs'
import path from 'path'

export const translationsDirectory = path.resolve(__dirname, '../../')

export const getTranslationFilePath = (language: Language) =>
  path.resolve(translationsDirectory, `${language}.json`)

export const getTransaltions = (language: Language) => {
  return attempt(
    () =>
      JSON.parse(fs.readFileSync(getTranslationFilePath(language), 'utf-8')),
    {},
  )
}
