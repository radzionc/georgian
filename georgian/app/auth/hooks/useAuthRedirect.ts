import { useRouter } from 'next/router'
import { useCallback } from 'react'
import {
  PersistentStateKey,
  managePersistentState,
} from '@georgian/app/state/persistentState'
import { Path } from '../../navigation/Path'

const persistentPath = managePersistentState<string>(
  PersistentStateKey.PathAttemptedWhileUnauthenticated,
)

export const useAuthRedirect = () => {
  const { replace, asPath } = useRouter()

  const toAuthenticationPage = useCallback(() => {
    persistentPath.set(asPath)
    replace(Path.SignIn)
  }, [asPath, replace])

  const toAuthenticatedPage = useCallback(() => {
    const destination = persistentPath.get() ?? Path.Home
    replace(destination)
    persistentPath.set(undefined)
  }, [replace])

  return {
    toAuthenticationPage,
    toAuthenticatedPage,
  } as const
}
