import { DemoPage } from 'components/DemoPage'
import { Spinner } from '@reactkit/ui/ui/Spinner'
import { Text } from '@reactkit/ui/ui/Text'
import { HStack } from '@reactkit/ui/ui/Stack'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Spinner">
      <HStack alignItems="center" gap={40} wrap="wrap">
        <Text size={40}>
          <Spinner />
        </Text>
        <Text color="supporting" size={20}>
          <Spinner />
        </Text>
      </HStack>
    </DemoPage>
  )
})
