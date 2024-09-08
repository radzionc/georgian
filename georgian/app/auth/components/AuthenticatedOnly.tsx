import { ComponentWithChildrenProps } from '@lib/ui/props'

import { useEffect } from 'react'
import { useAuthSession } from '@georgian/app/auth/hooks/useAuthSession'
import { useRouter } from 'next/router'
import { Path } from '../../navigation/Path'
import { makeTranslatedPagePath } from '@georgian/languages-ui/utils/makeTranslatedPagePath'
import { useLanguage } from '@georgian/languages-ui/components/LanguageProvider'

export const AuthenticatedOnly = ({ children }: ComponentWithChildrenProps) => {
  const [authSession] = useAuthSession()
  const { push } = useRouter()
  const { language } = useLanguage()

  useEffect(() => {
    if (!authSession) {
      push(makeTranslatedPagePath(language, Path.SignIn))
    }
  }, [authSession, language, push])

  return <>{children}</>
}
