import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { useLanguage } from './LanguageProvider'
import { makeTranslatedPagePath } from '../utils/makeTranslatedPagePath'

type LinkProps = ComponentProps<typeof NextLink> & {
  isTranslated?: boolean
}

export const TranslatedPageLink = ({ href, ...props }: LinkProps) => {
  const { language } = useLanguage()

  const path = makeTranslatedPagePath(language, href as string)

  return <NextLink {...props} href={path} />
}
