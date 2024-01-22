import { shouldBePresent } from '@georgian/utils/assert/shouldBePresent'
import { useCategoryTest } from './CategoryTestProvider'
import { MinimalisticToggle } from '@georgian/ui/inputs/MinimalisticToggle'
import { useCopy } from 'copy/CopyProvider'

export const MarkTest = () => {
  const copy = useCopy()

  const { currentTestNumber, markCurrentTest, unmarkCurrentTest, markedTests } =
    useCategoryTest()

  return (
    <MinimalisticToggle
      label={copy.markTest}
      value={markedTests.includes(shouldBePresent(currentTestNumber))}
      onChange={(value) => (value ? markCurrentTest() : unmarkCurrentTest())}
    />
  )
}
