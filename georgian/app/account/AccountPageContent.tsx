import { HStack, VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { useAssertUserState } from '../user/state/UserStateContext'
import { SignOut } from './SignOut'
import { useCopy } from '../copy/CopyProvider'

export const AccountPageContent = () => {
  const { email } = useAssertUserState()
  const copy = useCopy()

  return (
    <VStack gap={16}>
      <Text color="contrast" as="h1" size={20}>
        {copy.yourAccount}
      </Text>
      <HStack
        fullWidth
        alignItems="center"
        wrap="wrap"
        gap={40}
        justifyContent="space-between"
      >
        <Text>{email}</Text>
        <SignOut />
      </HStack>
    </VStack>
  )
}
