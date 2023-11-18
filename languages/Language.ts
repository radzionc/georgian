export const languages = ['en', 'ru', 'ka'] as const
export type Language = (typeof languages)[number]
