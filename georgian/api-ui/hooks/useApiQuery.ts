import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { useQuery } from '@tanstack/react-query'
import { useApi } from './useApi'
import {
  ApiInterface,
  ApiMethodName,
} from '@georgian/api-interface/ApiInterface'

export const getApiQueryKey = <M extends ApiMethodName>(
  method: M,
  input: ApiInterface[M]['input'],
) => withoutUndefined([method, input])

export const useApiQuery = <M extends ApiMethodName>(
  method: M,
  input: ApiInterface[M]['input'],
) => {
  const { call } = useApi()

  return useQuery({
    queryKey: getApiQueryKey(method, input),
    queryFn: () => call(method, input),
  })
}
