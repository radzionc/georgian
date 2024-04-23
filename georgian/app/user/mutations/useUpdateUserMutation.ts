import { User, UserEditableFields } from '@georgian/entities/User'
import { useApi } from '@georgian/api-ui/hooks/useApi'
import { useMutation } from '@tanstack/react-query'
import { useUserState } from '../state/UserStateContext'

export const useUpdateUserMutation = () => {
  const api = useApi()
  const { updateState } = useUserState()

  return useMutation({
    mutationFn: async (input: Partial<Pick<User, UserEditableFields>>) => {
      updateState((prev) => ({
        ...prev,
        ...input,
      }))

      return api.call('updateUser', input)
    },
  })
}
