import { useState } from 'react'
import { useHandleQueryParams } from '@georgian/app/navigation/hooks/useHandleQueryParams'
import { useRouter } from 'next/router'
import { ConfirmEmailAuthView } from '@lib/ui/auth/ConfirmEmailAuthView'

interface EmailConfirmQueryParams {
  email: string
}

export const EmailConfirmContent = () => {
  const [email, setEmail] = useState<string | undefined>()
  useHandleQueryParams<EmailConfirmQueryParams>(({ email }) => setEmail(email))

  const { back } = useRouter()

  return (
    <ConfirmEmailAuthView
      sender="georgiancitizen"
      email={email}
      onBack={back}
    />
  )
}
