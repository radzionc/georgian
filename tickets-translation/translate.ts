import fs from 'fs'
import { Language } from '../internalization/Language'
import { getTranslationsFilePath, textsFilePath } from './utils/sources'
import { translateTexts } from './utils/translateTexts'
import { arraysToRecord } from '@georgian/utils/array/arraysToRecord'

export const translate = async (language: Language) => {
  const texts = fs.readFileSync(textsFilePath, 'utf-8').split('\n\n')

  const translations = await translateTexts(texts, 'ka', language)
  const result = arraysToRecord(texts, translations)

  fs.writeFileSync(getTranslationsFilePath(language), JSON.stringify(result))
}

const language = process.argv[2] as Language

translate(language)
