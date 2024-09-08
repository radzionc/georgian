import { useCallback } from 'react'
import { useAuthSession } from '../hooks/useAuthSession'
import { useBoolean } from '@lib/ui/hooks/useBoolean'
import { Modal } from '@lib/ui/modal'
import { VStack } from '@lib/ui/layout/Stack'
import { AuthProviders } from './AuthFlow/AuthProviders'
import { SignUpAgreement } from './AuthFlow/SignUpAgreement'
import { pathAttemptedWhileUnauthenticated } from '../hooks/useAuthRedirect'
import { useRouter } from 'next/router'
import { useCopy } from '../../copy/CopyProvider'
import { analytics } from '../../analytics'
import { ActionGuardProps } from '@lib/ui/props'

export const AuthorizedOnlyAction = ({ action, render }: ActionGuardProps) => {
  const [authSession] = useAuthSession()
  const { asPath } = useRouter()

  const copy = useCopy()

  const [isAuthModalOpen, { toggle: openAuthModal, unset: closeAuthModal }] =
    useBoolean(false)

  const guardedAction = useCallback(() => {
    if (authSession) {
      return action()
    }

    analytics.trackEvent('Prompted to sign in')
    pathAttemptedWhileUnauthenticated.set(asPath)
    openAuthModal()
  }, [action, asPath, authSession, openAuthModal])

  return (
    <>
      {render({ action: guardedAction })}
      {isAuthModalOpen && (
        <Modal onClose={closeAuthModal} title={copy.signInToContinue}>
          <VStack fullWidth gap={24}>
            <AuthProviders />
            <SignUpAgreement />
          </VStack>
        </Modal>
      )}
    </>
  )
}
