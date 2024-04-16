import { ApiInterface } from '@georgian/api-interface/ApiInterface'
import { ApiResolver } from './ApiResolver'

export type ApiImplementation = {
  [K in keyof ApiInterface]: ApiResolver<K>
}
