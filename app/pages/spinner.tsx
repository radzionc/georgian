import { DemoPage } from 'components/DemoPage'
import { Spinner } from '@georgian/ui/ui/Spinner'
import { Text } from '@georgian/ui/ui/Text'
import { HStack } from '@georgian/ui/ui/Stack'
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
