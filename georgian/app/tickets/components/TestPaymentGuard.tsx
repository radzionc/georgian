import { useCallback } from 'react'
import { useBoolean } from '@lib/ui/hooks/useBoolean'
import { Modal } from '@lib/ui/modal'

import { useCopy } from '../../copy/CopyProvider'
import { analytics } from '../../analytics'
import { ActionGuardProps } from '@lib/ui/props'
import { useUserState } from '../../user/state/UserStateContext'
import { Button } from '@lib/ui/buttons/Button'
import { useProductPriceQuery } from '../../paddle/hooks/useProductPriceQuery'
import { QueryDependant } from '@lib/ui/query/components/QueryDependant'
import { getQueryDependantDefaultProps } from '@lib/ui/query/utils/getQueryDependantDefaultProps'
import { Text } from '@lib/ui/text'
import { injectNodes } from '@georgian/languages-ui/utils/injectNodes'

export const TestPaymentGuard = ({ action, render }: ActionGuardProps) => {
  const { state } = useUserState()

  const priceQuery = useProductPriceQuery()

  const copy = useCopy()

  const [isModalOpen, { toggle: openModal, unset: closeModal }] =
    useBoolean(false)

  const guardedAction = useCallback(() => {
    if (!state?.firstTestCompletedAt) {
      return action()
    }

    analytics.trackEvent('Prompted to buy the product')
    openModal()
  }, [action, openModal, state?.firstTestCompletedAt])

  return (
    <>
      {render({ action: guardedAction })}
      {isModalOpen && (
        <Modal
          width={480}
          footer={<Button size="l">{copy.continue}</Button>}
          onClose={closeModal}
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
      )}
    </>
  )
}
