import path from 'path'
import fs from 'fs'
import { TranslationRecord } from '@georgian/internalization/TranslationRecord'

export const textsFilePath = path.resolve(__dirname, `../sources/texts.txt`)

export const getTranslationsFilePath = (language: string) =>
  path.resolve(__dirname, `../sources/${language}.json`)

export const getTranslations = (language: string) => {
  const text = fs.readFileSync(getTranslationsFilePath(language), 'utf-8')
  return JSON.parse(text) as TranslationRecord
}
