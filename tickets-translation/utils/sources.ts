import path from 'path'
import fs from 'fs'
import { TranslationRecord } from '@georgian/translation/TranslationRecord'

export const textsFilePath = path.resolve(__dirname, `../sources/texts.txt`)

export const getTextsForTranslation = () =>
  fs.readFileSync(textsFilePath, 'utf-8').split('\n\n')

export const getTranslationsFilePath = (language: string) =>
  path.resolve(__dirname, `../sources/${language}.json`)

export const getTranslations = (language: string): TranslationRecord => {
  try {
    const text = fs.readFileSync(getTranslationsFilePath(language), 'utf-8')
    return JSON.parse(text)
  } catch (error) {
    return {}
  }
}
