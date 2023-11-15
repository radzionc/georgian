import { TargetLanguage } from '@georgian/internalization/Language'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ComponentProps } from 'react'

export const Link = ({ href, ...props }: ComponentProps<typeof NextLink>) => {
  const { query } = useRouter()

  const language = query.language as TargetLanguage

  const path = `/${language}${href}`

  return <NextLink {...props} href={path} />
}
