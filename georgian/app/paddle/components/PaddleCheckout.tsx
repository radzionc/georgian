import { useLanguage } from '@georgian/languages-ui/components/LanguageProvider'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { useAssertUserState } from '../../user/state/UserStateContext'
import { ClosableComponentProps } from '@lib/ui/props'
import { usePaddleSdkQuery } from '../hooks/usePaddleSdkQuery'
import { reportError } from '@georgian/app/errors/errorMonitoring'

const Container = styled.div`
  position: relative;
`

const paddleSupportedLocale = ['en', 'ru']

const className = `checkout-container`

type PaddleCheckoutProps = ClosableComponentProps & {
  onSuccess: () => void
}

export const PaddleCheckout = ({ onSuccess, onClose }: PaddleCheckoutProps) => {
  const { data: paddleSdk } = usePaddleSdkQuery()
  const { name: themeName } = useTheme()
  const { language } = useLanguage()
  const { email, id } = useAssertUserState()

  useEffect(() => {
    if (!paddleSdk) return

    paddleSdk.Update({
      eventCallback: (data) => {
        console.log('Paddle event:', data)
        if (data.name === 'checkout.completed') {
          onSuccess()
        } else if (data.name === 'checkout.closed') {
          onClose()
        } else if (data.name === 'checkout.error') {
          onClose()
          reportError(new Error('Paddle checkout error'), { data })
        }
      },
    })

    paddleSdk.Checkout.open({
      settings: {
        displayMode: 'inline',
        theme: themeName,
        locale: paddleSupportedLocale.includes(language) ? language : 'en',
        allowLogout: false,
        showAddDiscounts: true,
        frameTarget: className,
        frameStyle: 'width:100%; background-color: transparent; border: none;',
      },
      items: [
        {
          priceId: shouldBePresent(process.env.NEXT_PUBLIC_PADDLE_PRICE_ID),
          quantity: 1,
        },
      ],
      customer: {
        email,
      },
      customData: {
        userId: id,
      },
    })
  }, [email, id, language, onClose, onSuccess, paddleSdk, themeName])

  return <Container className={className} />
}
