import { Language } from '@georgian/languages/Language'
import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { useRouter } from 'next/router'
import { updateLanguageInPathname } from '../utils/updateLanguageInPathname'

type LanguageState = {
  language: Language
  isTranslated: boolean
}

const { useValue: useLanguageContext, provider: LanguageProvider } =
  getValueProviderSetup<LanguageState>('LanguageProvider')

export { LanguageProvider }

export const useLanguage = () => {
  const { language, isTranslated } = useLanguageContext()

  const { asPath, push } = useRouter()

  const setLanguage = (newLanguage: Language) => {
    if (!isTranslated) {
      throw new Error(`This page doesn't support translations`)
    }

    const newPathname = updateLanguageInPathname({
      pathname: asPath,
      newLanguage,
      oldLanguage: language,
    })

    push(newPathname)
  }

  return {
    language,
    setLanguage,
    isTranslated,
  } as const
}
