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
  const { replace, pathname } = useRouter()

  const toAuthenticationPage = useCallback(() => {
    persistentPath.set(pathname)
    replace(Path.SignIn)
  }, [pathname, replace])

  const toAuthenticatedPage = useCallback(() => {
    persistentPath.get()
    const destination = persistentPath.get() ?? Path.Home
    replace(destination)
    persistentPath.set(undefined)
  }, [replace])

  return {
    toAuthenticationPage,
    toAuthenticatedPage,
  } as const
}
