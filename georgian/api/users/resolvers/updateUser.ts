import { userReadonlyFields } from '@georgian/entities/User'
import { intersection } from '@lib/utils/array/intersection'
import { assertUserId } from '../../auth/assertUserId'
import { ApiResolver } from '../../resolvers/ApiResolver'
import * as usersDb from '@georgian/db/user'

export const updateUser: ApiResolver<'updateUser'> = async ({
  input,
  context,
}) => {
  const hasReadonlyField =
    intersection(Object.keys(input), [...userReadonlyFields]).length > 0
  if (hasReadonlyField) {
    throw new Error('You cannot update readonly fields')
  }

  const userId = assertUserId(context)

  await usersDb.updateUser(userId, input)
}
