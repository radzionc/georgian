import { Language } from '@georgian/languages/Language'
import { attempt } from '@georgian/utils/attempt'
import fs from 'fs'
import path from 'path'

export const copySourceDirectory = path.resolve(__dirname, '../../sources')

export const getCopySourceFilePath = (language: Language) =>
  path.resolve(copySourceDirectory, `${language}.json`)

export const getCopySource = (language: Language) => {
  return attempt(
    () => JSON.parse(fs.readFileSync(getCopySourceFilePath(language), 'utf-8')),
    {},
  )
}
