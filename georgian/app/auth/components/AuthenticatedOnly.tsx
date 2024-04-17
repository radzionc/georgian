import { ComponentWithChildrenProps } from '@lib/ui/props'

import { useEffect } from 'react'
import { useAuthSession } from '@georgian/app/auth/hooks/useAuthSession'
import { useRouter } from 'next/router'
import { Path } from '../../navigation/Path'

export const AuthenticatedOnly = ({ children }: ComponentWithChildrenProps) => {
  const [authSession] = useAuthSession()
  const { push } = useRouter()

  useEffect(() => {
    if (!authSession) {
      push(Path.SignIn)
    }
  }, [authSession, push])

  return <>{children}</>
}
