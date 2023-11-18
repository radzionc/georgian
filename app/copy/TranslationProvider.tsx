import { ComponentWithChildrenProps } from '@georgian/ui/props'
import { TranslatedPageProps } from './TranslatedPageProps'
import { CopyProvider } from './CopyProvider'
import { ruCopy } from './ru'
import { enCopy } from './en'
import { kaCopy } from './ka'

import { match } from '@georgian/utils/match'
import { LanguageProvider } from '@georgian/languages-ui/components/LanguageProvider'

export const TranslationProvider = ({
  children,
  language,
}: TranslatedPageProps & ComponentWithChildrenProps) => {
  const copy = match(language, {
    ru: () => ruCopy,
    en: () => enCopy,
    ka: () => kaCopy,
  })
  return (
    <LanguageProvider value={language}>
      <CopyProvider value={copy}>{children}</CopyProvider>
    </LanguageProvider>
  )
}
