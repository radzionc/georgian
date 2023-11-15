export const targetLanguages = ['en', 'ru'] as const
export type TargetLanguage = (typeof targetLanguages)[number]
export type SourceLanguage = 'ka'

export type Language = SourceLanguage | TargetLanguage

export const languageName: Record<Language, string> = {
  en: 'English',
  ka: 'Georgian',
  ru: 'Russian',
}
