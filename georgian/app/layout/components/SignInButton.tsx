import { Button } from '@lib/ui/buttons/Button'
import { Path } from '../../navigation/Path'
import { useCopy } from '../../copy/CopyProvider'
import { TranslatedPageLink } from '@georgian/languages-ui/components/TranslatedPageLink'

export const SignInButton = () => {
  const copy = useCopy()

  return (
    <TranslatedPageLink href={Path.SignIn}>
      <Button as="div" kind="reversed">
        {copy.signIn}
      </Button>
    </TranslatedPageLink>
  )
}
