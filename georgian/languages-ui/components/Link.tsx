import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { useLanguage } from './LanguageProvider'

type LinkProps = ComponentProps<typeof NextLink> & {
  isTranslated?: boolean
}

export const Link = ({ href, isTranslated = true, ...props }: LinkProps) => {
  const { language } = useLanguage()

  const path = isTranslated ? `/${language}${href}` : href

  return <NextLink {...props} href={path} />
}
