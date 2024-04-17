import { analytics } from '@georgian/app/analytics'
import { setUserIdForErrorMonitoring } from '@georgian/app/errors/errorMonitoring'
import { useEffect } from 'react'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { useAssertUserState } from '../state/UserStateContext'

export const UserManagerProvider = ({
  children,
}: ComponentWithChildrenProps) => {
  const { id } = useAssertUserState()
  useEffect(() => {
    analytics.setUser(id)
    setUserIdForErrorMonitoring(id)
  }, [id])

  return <>{children}</>
}
