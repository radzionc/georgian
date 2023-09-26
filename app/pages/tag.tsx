import { DemoPage } from 'components/DemoPage'
import { HStack } from '@georgian/ui/ui/Stack'
import { Tag } from '@georgian/ui/ui/Tag'
import { useTheme } from 'styled-components'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  const {
    colors: { getLabelColor },
  } = useTheme()
  return (
    <DemoPage title="Tag">
      <HStack alignItems="center" gap={20} wrap="wrap">
        <Tag $color={getLabelColor(4)}>Health</Tag>
        <Tag $color={getLabelColor(8)}>Mindset</Tag>
        <Tag $color={getLabelColor(11)}>Relationships</Tag>
      </HStack>
    </DemoPage>
  )
})
