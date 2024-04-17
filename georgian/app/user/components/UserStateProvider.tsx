import { useCallback, useEffect } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useStartOfDay } from '@lib/ui/hooks/useStartOfDay'
import { useAuthSession } from '@georgian/app/auth/hooks/useAuthSession'
import { User } from '@georgian/entities/User'
import { useApi } from '@georgian/api-ui/hooks/useApi'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { UserStateContext } from '../state/UserStateContext'

const userStateQueryKey = ['userState']

export const UserStateProvider = ({ children }: ComponentWithChildrenProps) => {
  const [authSession] = useAuthSession()

  const queryClient = useQueryClient()

  const api = useApi()

  const dayStartedAt = useStartOfDay()

  const {
    data = null,
    refetch,
    isLoading,
    dataUpdatedAt,
  } = useQuery({
    queryKey: userStateQueryKey,
    queryFn: () => api.call('user', undefined),
    enabled: Boolean(authSession),
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (dataUpdatedAt && dataUpdatedAt < dayStartedAt) {
      refetch()
    }
  }, [dataUpdatedAt, dayStartedAt, refetch])

  const updateState = useCallback(
    (newValue: User | ((prevValue: User) => User)) => {
      queryClient.setQueryData<User>(userStateQueryKey, (prevValue) => {
        return typeof newValue === 'function'
          ? newValue(prevValue as User)
          : newValue
      })
    },
    [queryClient],
  )

  return (
    <UserStateContext.Provider
      value={{
        state: data,
        updateState,
        pullRemoteState: refetch,
        isLoading,
        lastUpdatedAt: dataUpdatedAt,
      }}
    >
      {children}
    </UserStateContext.Provider>
  )
}
