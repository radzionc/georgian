import { Button } from '@lib/ui/buttons/Button'
import Link from 'next/link'
import { Path } from '../../navigation/Path'
import { useCopy } from '../../copy/CopyProvider'

export const SignInButton = () => {
  const copy = useCopy()

  return (
    <Link href={Path.SignIn}>
      <Button as="div" kind="reversed">
        {copy.signIn}
      </Button>
    </Link>
  )
}
