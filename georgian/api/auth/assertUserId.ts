import { ApiError } from '@georgian/api-interface/ApiError'
import { ApiResolverContext } from '../resolvers/ApiResolverContext'

export const assertUserId = ({ userId }: ApiResolverContext) => {
  if (!userId) {
    throw new ApiError(
      'invalidAuthToken',
      'Only authenticated user can perform this action',
    )
  }

  return userId
}
