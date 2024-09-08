import { useRouter } from 'next/router'
import { useCallback } from 'react'
import {
  PersistentStateKey,
  managePersistentState,
} from '@georgian/app/state/persistentState'
import { Path } from '../../navigation/Path'
import { useLanguage } from '@georgian/languages-ui/components/LanguageProvider'
import { makeTranslatedPagePath } from '@georgian/languages-ui/utils/makeTranslatedPagePath'

export const pathAttemptedWhileUnauthenticated = managePersistentState<string>(
  PersistentStateKey.PathAttemptedWhileUnauthenticated,
)

export const useAuthRedirect = () => {
  const { replace, asPath } = useRouter()
  const { language } = useLanguage()

  const toAuthenticationPage = useCallback(() => {
    pathAttemptedWhileUnauthenticated.set(asPath)
    replace(makeTranslatedPagePath(language, Path.SignIn))
  }, [asPath, language, replace])

  const toAuthenticatedPage = useCallback(() => {
    const destination = pathAttemptedWhileUnauthenticated.get() ?? Path.Home
    replace(destination)
    pathAttemptedWhileUnauthenticated.set(undefined)
  }, [replace])

  return {
    toAuthenticationPage,
    toAuthenticatedPage,
  } as const
}
