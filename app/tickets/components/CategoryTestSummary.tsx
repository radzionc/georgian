import { Text } from '@georgian/ui/text'
import { useCategoryTest } from './CategoryTestProvider'
import { VStack } from '@georgian/ui/layout/Stack'
import { toPercents } from '@georgian/utils/toPercents'
import { TicketItem } from './TicketItem'
import { useCopy } from 'copy/CopyProvider'
import { range } from '@georgian/utils/array/range'

const minCompletionRate = 0.7

export const CategoryTestSummary = () => {
  const { answers, tests, markedTests } = useCategoryTest()

  const failedTests = range(answers.length).filter((index) => {
    const correctAnswer = tests[index].answers.findIndex(
      ({ isCorrect }) => isCorrect,
    )
    return answers[index] !== correctAnswer
  })
  const passedTestsCount = tests.length - failedTests.length
  const hasPassed = passedTestsCount / tests.length >= minCompletionRate

  const copy = useCopy()

  const minPercentage = toPercents(minCompletionRate, 'round')

  return (
    <VStack gap={40}>
      <VStack fullWidth gap={8} alignItems="center">
        <Text weight="semibold" size={24} color="contrast">
          {hasPassed ? copy.testPassed : copy.testFailed}
        </Text>
        <Text weight="bold" color={hasPassed ? 'success' : 'alert'} size={40}>
          {passedTestsCount} / {tests.length}
        </Text>
        <Text centered style={{ maxWidth: 360 }} color="supporting">
          You've scored {toPercents(passedTestsCount / tests.length, 'round')}.{' '}
          {hasPassed
            ? copy.testCongratulation({
                percentage: minPercentage,
              })
            : copy.scoreToPass({
                percentage: minPercentage,
              })}
        </Text>
      </VStack>
      <VStack gap={20}>
        {failedTests.map((test) => (
          <TicketItem falseAnswer={answers[test]} ticket={tests[test]} />
        ))}
        {markedTests
          .filter((test) => !failedTests.includes(test))
          .map((test) => (
            <TicketItem ticket={tests[test]} />
          ))}
      </VStack>
    </VStack>
  )
}
