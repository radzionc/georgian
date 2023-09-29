import { Language, languageName } from '@georgian/entities/Ticket'
import { askAi } from './askAi'

export const translate = async (
  texts: string[],
  from: Language,
  to: Language,
) => {
  const prompt = [
    `Translate texts from ${languageName[from]} to ${languageName[to]}.`,
    'Return result in the same format as input as a valid JSON array of strings that I can parse with JavaScript',
    `Input: ${JSON.stringify(texts)}`,
  ].join(' ')

  const result = await askAi(prompt)
  const translations = JSON.parse(result) as string[]
  if (translations.length !== texts.length) {
    throw new Error('Translations length does not match texts length')
  }

  console.log(translations)

  return translations
}
