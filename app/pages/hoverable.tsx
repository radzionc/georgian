import { DemoPage } from 'components/DemoPage'
import { Hoverable } from '@georgian/ui/ui/Hoverable'
import { Text } from '@georgian/ui/ui/Text'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="35XAA5Hgag0" title="Hoverable">
      <Hoverable>
        <Text weight="bold" color="primary">
          Hover me!
        </Text>
      </Hoverable>
    </DemoPage>
  )
})
