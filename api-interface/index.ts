export const apiEndpoints = [
  'authSessionWithEmail',
  'authSessionWithOAuth',
  'myState',
  'updateMyState',
] as const
export type ApiEndpoint = (typeof apiEndpoints)[number]

export interface ApiEndpointInput {
  authSessionWithEmail: undefined
  authSessionWithOAuth: undefined
  myState: undefined
  updateMyState: undefined
}

interface ApiEndpointResponse {
  authSessionWithEmail: undefined
  authSessionWithOAuth: undefined
  myState: undefined
  updateMyState: undefined
}

export type ApiInput<Endpoint extends ApiEndpoint> = ApiEndpointInput[Endpoint]

export type ApiResponse<Endpoint extends ApiEndpoint> =
  ApiEndpointResponse[Endpoint]

export type ApiResolver<Endpoint extends ApiEndpoint> = (
  input: ApiInput<Endpoint>,
) => Promise<ApiResponse<Endpoint>>

export type ApiImplementation = {
  [K in ApiEndpoint]: ApiResolver<K>
}
