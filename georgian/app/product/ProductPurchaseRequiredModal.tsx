import { injectNodes } from '@georgian/languages-ui/utils/injectNodes'
import { Button } from '@lib/ui/buttons/Button'
import { Modal } from '@lib/ui/modal'
import { ClosableComponentProps } from '@lib/ui/props'
import { QueryDependant } from '@lib/ui/query/components/QueryDependant'
import { getQueryDependantDefaultProps } from '@lib/ui/query/utils/getQueryDependantDefaultProps'
import { useCopy } from '../copy/CopyProvider'
import { useProductPriceQuery } from '../paddle/hooks/useProductPriceQuery'
import { Text } from '@lib/ui/text'
import { useBoolean } from '@lib/ui/hooks/useBoolean'
import { PaddleCheckout } from '../paddle/components/PaddleCheckout'
import { analytics } from '../analytics'
import { useUserState } from '../user/state/UserStateContext'

export const ProductPurchaseRequiredModal = ({
  onClose,
}: ClosableComponentProps) => {
  const priceQuery = useProductPriceQuery()
  const copy = useCopy()

  const { updateState } = useUserState()

  const [isCheckoutOpen, { set: openCheckout }] = useBoolean(false)

  if (isCheckoutOpen) {
    return (
      <PaddleCheckout
        onSuccess={() => {
          updateState((user) => ({
            ...user,
            lifeTimeDeal: {
              provider: 'paddle',
            },
          }))
          analytics.trackEvent('Product purchased')
          onClose()
        }}
        onClose={onClose}
      />
    )
  }

  return (
    <Modal
      width={480}
      footer={
        <Button onClick={openCheckout} size="l">
          {copy.continue}
        </Button>
      }
      onClose={onClose}
      title={copy.purchasePromptWithPrice(
        {
          price: (
            <QueryDependant
              query={priceQuery}
              {...getQueryDependantDefaultProps('price')}
              success={(price) => (
                <Text color="success" as="span">
                  {price.currencySymbol}
                  {price.amount}
                </Text>
              )}
            />
          ),
        },
        injectNodes,
      )}
    >
      <Text height="large">{copy.purchasePromptContent}</Text>
    </Modal>
  )
}
