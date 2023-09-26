import { DemoPage } from 'components/DemoPage'
import { Text } from '@georgian/ui/ui/Text'
import { SeparatedByLine } from '@georgian/ui/ui/SeparatedByLine'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Separated By Line" youtubeVideoId="r75UDbxnFDc">
      <SeparatedByLine gap={16}>
        <Text>First section</Text>
        <Text>Second section</Text>
      </SeparatedByLine>
    </DemoPage>
  )
})
