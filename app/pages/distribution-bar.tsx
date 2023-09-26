import { DistributionBar } from '@reactkit/ui/ui/DistributionBar'
import { DemoPage } from 'components/DemoPage'
import { useTheme } from 'styled-components'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  const {
    colors: { getLabelColor },
  } = useTheme()

  return (
    <DemoPage youtubeVideoId="5iF5YOoAdzY" title="DistributionBar">
      <DistributionBar
        items={[
          { value: 100, color: getLabelColor(1) },
          { value: 200, color: getLabelColor(5) },
          { value: 300, color: getLabelColor(8) },
        ]}
      />
    </DemoPage>
  )
})
