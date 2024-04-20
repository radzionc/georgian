import { Language } from '@georgian/languages/Language'

export const makeTranslatedPagePath = (language: Language, path: string) =>
  `/${language}${path}`
