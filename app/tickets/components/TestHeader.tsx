import { shouldBePresent } from '@georgian/utils/assert/shouldBePresent'
import { useCategoryTest } from './CategoryTestProvider'
import {
  HStackSeparatedBy,
  slashSeparator,
} from '@georgian/ui/layout/StackSeparatedBy'
import { MarkTest } from './MarkTest'
import { HStack } from '@georgian/ui/layout/Stack'
import { Text } from '@georgian/ui/text'
import styled from 'styled-components'
import { horizontalPadding } from '@georgian/ui/css/horizontalPadding'
import { defaultPanelPadding } from '@georgian/ui/panel/Panel'

const Container = styled(HStack)`
  ${horizontalPadding(defaultPanelPadding)}
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
