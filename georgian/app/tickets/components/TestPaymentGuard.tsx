import { useCallback } from 'react'
import { useBoolean } from '@lib/ui/hooks/useBoolean'

import { analytics } from '../../analytics'
import { ActionGuardProps } from '@lib/ui/props'
import { useUserState } from '../../user/state/UserStateContext'

import { ProductPurchaseRequiredModal } from '../../product/ProductPurchaseRequiredModal'

export const TestPaymentGuard = ({ action, render }: ActionGuardProps) => {
  const { state } = useUserState()

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
      {isModalOpen && <ProductPurchaseRequiredModal onClose={closeModal} />}
    </>
  )
}
