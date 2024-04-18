import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { useLanguage } from './LanguageProvider'

type LinkProps = ComponentProps<typeof NextLink> & {
  isTranslated?: boolean
}

export const TranslatedPageLink = ({ href, ...props }: LinkProps) => {
  const { language } = useLanguage()

  const path = `/${language}${href}`

  return <NextLink {...props} href={path} />
}
