import { getUserByEmail, putUser } from '@georgian/db/user'
import { AuthenticationResult } from './AuthenticationResult'
import { getAuthSession } from './getAuthSession'
import { AuthSession } from '@lib/auth/AuthSession'
import { CountryCode } from '@lib/countries'
import { userDefaultFields } from '@georgian/entities/User'
import { makeId } from '@lib/dynamodb/makeId'

interface AuthorizeParams extends AuthenticationResult {
  timeZone: number
  country?: CountryCode
}

export const authorize = async ({
  email,
  name,
  country,
}: AuthorizeParams): Promise<AuthSession> => {
  const existingUser = await getUserByEmail(email, ['id'])
  if (existingUser) {
    return {
      ...(await getAuthSession(existingUser.id)),
      isFirst: false,
    }
  }

  const id = makeId()
  await putUser({
    ...userDefaultFields,
    id,
    email,
    name,
    country,
  })

  const session = await getAuthSession(id)

  return {
    ...session,
    isFirst: true,
  }
}
