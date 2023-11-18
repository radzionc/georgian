import { convertDuration } from '@georgian/utils/time/convertDuration'

export const rarelyChangingQueryOptions = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  cacheTime: convertDuration(1, 'd', 'ms'),
}
