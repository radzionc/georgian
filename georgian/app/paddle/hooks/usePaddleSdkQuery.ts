import { useQuery } from '@tanstack/react-query'
import { initializePaddle } from '@paddle/paddle-js'

import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'

export const paddleQueryKey = ['paddle']

export const usePaddleSdkQuery = () => {
  return useQuery({
    queryKey: paddleQueryKey,
    queryFn: async () => {
      const sdk = await initializePaddle({
        token: shouldBePresent(
          process.env.NEXT_PUBLIC_PADDLE_TOKEN,
          'NEXT_PUBLIC_PADDLE_TOKEN',
        ),
      })

      return shouldBePresent(sdk, 'Paddle SDK')
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  })
}
