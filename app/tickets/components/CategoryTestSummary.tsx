import { Text } from '@georgian/ui/ui/Text'
import { useCategoryTest } from './CategoryTestProvider'
import { VStack } from '@georgian/ui/ui/Stack'
import { toPercents } from '@georgian/utils/toPercents'
import { TicketItem } from './TicketItem'

const minCompletionRate = 0.7

export const CategoryTestSummary = () => {
  const { answers, tests } = useCategoryTest()
  const failedTests = tests.filter((ticket, index) => {
    const correctAnswer = ticket.answers.findIndex(({ isCorrect }) => isCorrect)
    return answers[index] !== correctAnswer
  })
  const passedTestsCount = tests.length - failedTests.length
  const hasPassed = passedTestsCount / tests.length >= minCompletionRate

  return (
    <VStack gap={40}>
      <VStack fullWidth gap={8} alignItems="center">
        <Text weight="semibold" size={24} color="contrast">
          {hasPassed
            ? 'You have passed the test!'
            : `You have failed the test :(`}
        </Text>
        <Text weight="bold" color={hasPassed ? 'success' : 'alert'} size={40}>
          {passedTestsCount} / {tests.length}
        </Text>
        <Text centered style={{ maxWidth: 360 }} color="supporting">
          You've scored {toPercents(passedTestsCount / tests.length, 'round')}.{' '}
          {hasPassed
            ? `
            Congratulations! You've surpassed the ${toPercents(
              minCompletionRate,
              'round',
            )} milestone! 🎉 Keep up the great work!
          `
            : `Score ${toPercents(
                minCompletionRate,
                'round',
              )} or above to pass!`}
        </Text>
      </VStack>
      <VStack gap={20}>
        {failedTests.map((test) => (
          <TicketItem
            falseAnswer={answers[tests.indexOf(test)]}
            ticket={test}
          />
        ))}
      </VStack>
    </VStack>
  )
}
