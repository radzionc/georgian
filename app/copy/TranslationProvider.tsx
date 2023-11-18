import { ComponentWithChildrenProps } from '@georgian/ui/props'
import { TranslatedPageProps } from './TranslatedPageProps'
import { CopyProvider } from './CopyProvider'
import { ruCopy } from './ru'
import { enCopy } from './en'
import { kaCopy } from './ka'

import { match } from '@georgian/utils/match'

export const TranslationProvider = ({
  children,
  language,
}: TranslatedPageProps & ComponentWithChildrenProps) => {
  const copy = match(language, {
    ru: () => ruCopy,
    en: () => enCopy,
    ka: () => kaCopy,
  })
  return <CopyProvider value={copy}>{children}</CopyProvider>
}
