import { DemoPage } from 'components/DemoPage'
import { Text } from '@georgian/ui/ui/Text'
import { SeparatedByLine } from '@georgian/ui/ui/SeparatedByLine'
import {
  HStackSeparatedBy,
  dotSeparator,
  slashSeparator,
} from '@georgian/ui/ui/StackSeparatedBy'
import { LabeledValue } from '@georgian/ui/ui/LabeledValue'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="r75UDbxnFDc" title="Stack Separated By">
      <SeparatedByLine gap={16}>
        <LabeledValue name="Total">
          <HStackSeparatedBy
            separator={<Text color="supporting">{slashSeparator}</Text>}
          >
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </HStackSeparatedBy>
        </LabeledValue>
        <LabeledValue name="Total">
          <HStackSeparatedBy
            separator={<Text color="supporting">{dotSeparator}</Text>}
          >
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </HStackSeparatedBy>
        </LabeledValue>
      </SeparatedByLine>
    </DemoPage>
  )
})
