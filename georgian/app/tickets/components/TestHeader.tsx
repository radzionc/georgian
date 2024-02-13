import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { useCategoryTest } from './CategoryTestProvider'
import {
  HStackSeparatedBy,
  slashSeparator,
} from '@lib/ui/layout/StackSeparatedBy'
import { MarkTest } from './MarkTest'
import { HStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import styled from 'styled-components'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { panelDefaultPadding } from '@lib/ui/panel/Panel'

const Container = styled(HStack)`
  ${horizontalPadding(panelDefaultPadding)}
`

export const TestHeader = () => {
  const { currentTestNumber, tests } = useCategoryTest()

  return (
    <Container alignItems="center" fullWidth justifyContent="space-between">
      <Text as="div" weight="semibold" color="supporting">
        <HStackSeparatedBy separator={slashSeparator}>
          <Text color="contrast">{shouldBePresent(currentTestNumber) + 1}</Text>
          <Text>{tests.length}</Text>
        </HStackSeparatedBy>
      </Text>
      <MarkTest />
    </Container>
  )
}
