import { CountryCode } from '@georgian/utils/countries'

export const languages = ['en', 'ru', 'ka'] as const
export type Language = (typeof languages)[number]

export const languagePrimaryCountry: Record<Language, CountryCode> = {
  en: 'GB',
  ru: 'RU',
  ka: 'GE',
}

export const languageNativeName: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  ka: 'ქართული',
}
