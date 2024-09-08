import { useQuery } from '@tanstack/react-query'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { usePaddleSdkQuery } from './usePaddleSdkQuery'

export const productPriceQuery = ['productPriceQuery']

export type ProductPrice = {
  currencyCode: string
  currencySymbol: string
  amount: number
}

export const useProductPriceQuery = () => {
  const { data: paddleSdk } = usePaddleSdkQuery()

  return useQuery({
    queryKey: productPriceQuery,
    queryFn: async (): Promise<ProductPrice> => {
      const sdk = shouldBePresent(paddleSdk)
      const result = await sdk.PricePreview({
        items: [
          {
            quantity: 1,
            priceId: shouldBePresent(process.env.NEXT_PUBLIC_PADDLE_PRICE_ID),
          },
        ],
      })

      const {
        data: {
          details: { lineItems },
        },
      } = result
      const [
        {
          price: {
            unitPrice: { currencyCode },
          },
          formattedTotals: { total },
        },
      ] = lineItems

      const index = total.search(/\d/)
      const currencySymbol = total.slice(0, index)
      const amountAsString = total.slice(index).replace(',', '')
      const amount = Number(amountAsString)

      return {
        currencyCode,
        currencySymbol,
        amount,
      }
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!paddleSdk,
  })
}
