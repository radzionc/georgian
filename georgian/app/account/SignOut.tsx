import { Button } from '@lib/ui/buttons/Button'
import { useAuthSession } from '../auth/hooks/useAuthSession'

export const SignOut = () => {
  const [, setAuthSession] = useAuthSession()

  return (
    <Button kind="outlined" onClick={() => setAuthSession(null)}>
      Sign out
    </Button>
  )
}
