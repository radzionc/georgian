import styled, { useTheme } from 'styled-components'
import { HSLA } from '@georgian/ui/ui/colors/HSLA'

import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { sameDimensions } from '@georgian/ui/css/sameDimensions'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@georgian/ui/ui/Panel/Panel'
import { makeDemoPage } from 'layout/makeDemoPage'

const Conent = styled(Panel)<{ $color: HSLA }>`
  ${sameDimensions(80)};
  background: ${({ $color }) => $color.toCssValue()};
`

export default makeDemoPage(() => {
  const { colors } = useTheme()
  return (
    <DemoPage youtubeVideoId="iVYo-gqyi90" title="Stacks">
      <VStack alignItems="start" gap={40}>
        <Panel>
          <HStack gap={20}>
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
          </HStack>
        </Panel>
        <Panel>
          <VStack gap={20}>
            <Conent $color={colors.alert} />
            <Conent $color={colors.alert} />
            <Conent $color={colors.alert} />
            <Conent $color={colors.alert} />
          </VStack>
        </Panel>
      </VStack>
    </DemoPage>
  )
})
