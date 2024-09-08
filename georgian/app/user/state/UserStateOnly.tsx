import { ComponentWithChildrenProps } from '@lib/ui/props'

import { useEffect } from 'react'
import { useAuthRedirect } from '@georgian/app/auth/hooks/useAuthRedirect'
import { useAuthSession } from '@georgian/app/auth/hooks/useAuthSession'
import { useUserState } from './UserStateContext'

export const UserStateOnly = ({ children }: ComponentWithChildrenProps) => {
  const { state } = useUserState()
  const { toAuthenticationPage } = useAuthRedirect()

  const [authSession] = useAuthSession()

  useEffect(() => {
    if (!authSession) {
      toAuthenticationPage()
    }
  }, [authSession, toAuthenticationPage])

  return state ? <>{children}</> : null
}
