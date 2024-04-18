import { ApiImplementation } from './ApiImplementation'
import { authSessionWithEmail } from '../auth/resolvers/authSessionWithEmail'
import { authSessionWithOAuth } from '../auth/resolvers/authSessionWithOAuth'
import { user } from '../users/resolvers/user'

import { sendAuthLinkByEmail } from '../auth/resolvers/sendAuthLinkByEmail'
import { setTicketCompletion } from '../exam/resolvers/setTicketCompletion'

export const implementation: ApiImplementation = {
  authSessionWithEmail,
  authSessionWithOAuth,
  sendAuthLinkByEmail,
  user,
  setTicketCompletion,
}
