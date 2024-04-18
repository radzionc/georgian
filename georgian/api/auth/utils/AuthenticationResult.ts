import { User } from '@georgian/entities/User'

export type AuthenticationResult = Pick<User, 'email' | 'name'>
