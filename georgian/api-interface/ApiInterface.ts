import { OAuthProvider } from '@lib/auth/OAuthProvider'
import { AuthSession } from '@lib/auth/AuthSession'
import { User, UserEditableFields } from '@georgian/entities/User'
import { ApiMethod } from './ApiMethod'
import { TicketKey } from '@georgian/entities/Ticket'

export interface ApiInterface {
  authSessionWithEmail: ApiMethod<
    {
      code: string
      timeZone: number
    },
    AuthSession
  >

  authSessionWithOAuth: ApiMethod<
    {
      provider: OAuthProvider
      code: string
      redirectUri: string
      timeZone: number
    },
    AuthSession
  >

  user: ApiMethod<undefined, User>
  updateUser: ApiMethod<Partial<Pick<User, UserEditableFields>>, undefined>

  sendAuthLinkByEmail: ApiMethod<{ email: string }, undefined>

  setTicketCompletion: ApiMethod<TicketKey & { value: boolean }, undefined>
}

export type ApiMethodName = keyof ApiInterface
