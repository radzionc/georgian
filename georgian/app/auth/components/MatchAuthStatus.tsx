import { ReactNode } from 'react'
import { useAuthSession } from '../hooks/useAuthSession'
import { ClientOnly } from '@lib/ui/base/ClientOnly'

type AuthStatus = 'authenticated' | 'unauthenticated'

type MatchAuthStatusProps = Record<AuthStatus, () => ReactNode>

export const MatchAuthStatus = ({
  authenticated,
  unauthenticated,
}: MatchAuthStatusProps) => {
  const [authSession] = useAuthSession()

  const render = authSession ? authenticated : unauthenticated

  return <ClientOnly>{render()}</ClientOnly>
}
