import { Button } from '@lib/ui/buttons/Button'
import { useAuthSession } from '../auth/hooks/useAuthSession'
import { useCopy } from '../copy/CopyProvider'

export const SignOut = () => {
  const [, setAuthSession] = useAuthSession()
  const copy = useCopy()

  return (
    <Button kind="outlined" onClick={() => setAuthSession(null)}>
      {copy.signOut}
    </Button>
  )
}
