import { TicketCategory } from '@georgian/entities/Ticket'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { createContextHook } from '@lib/ui/state/createContextHook'
import { Text } from '@lib/ui/text'
import { createContext, useCallback, useMemo, useState } from 'react'
import { sampleArray } from '@lib/utils/array/sampleArray'
import { useEffectOnDependencyChange } from '@lib/ui/hooks/useEffectOnDependencyChange'
import { EnhancedTicket } from '@georgian/entities/EnhancedTicket'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'
import { TestPreference, useTestPreferences } from '../hooks/useTestPreferences'
import { useUserState } from '../../user/state/UserStateContext'
import { useUpdateUserMutation } from '../../user/mutations/useUpdateUserMutation'

interface CategoryTestProviderState {
  testPreference: TestPreference
  setTestPreference: (value: TestPreference) => void
  completedTickets: EnhancedTicket[]

  markedTests: number[]
  markCurrentTest: () => void
  unmarkCurrentTest: () => void

  tests: EnhancedTicket[]
  currentTestNumber: number | null
  answerCurrentTest: (answer: number) => void
  answers: number[]
  restart: () => void
}

const CategoryTestContext = createContext<
  CategoryTestProviderState | undefined
>(undefined)

export const useCategoryTest = createContextHook(
  CategoryTestContext,
  'CategoryTestContext',
)

export const testSize = 10

interface CategoryTestProviderProps extends ComponentWithChildrenProps {
  category: TicketCategory
  tickets: EnhancedTicket[]
}

export const CategoryTestProvider = ({
  category,
  tickets,
  children,
}: CategoryTestProviderProps) => {
  const { state } = useUserState()
  const completedTickets = useMemo(() => {
    if (!state) return []

    return state.completedTickets[category].map((ticketNumber) =>
      shouldBePresent(tickets.find((t) => t.ticketNumber === ticketNumber)),
    )
  }, [category, state, tickets])

  const hasEnoughCompletedTickets = completedTickets.length > testSize
  const [testPreferences, setTestPreferences] = useTestPreferences()
  const testPreference = hasEnoughCompletedTickets
    ? testPreferences[category]
    : 'all'
  const setTestPreference = useCallback(
    (value: TestPreference) => {
      setTestPreferences({
        ...testPreferences,
        [category]: value,
      })
    },
    [category, setTestPreferences, testPreferences],
  )

  const [answers, setAnswers] = useState<number[]>([])
  const [currentTestNumber, setCurrentTestNumber] = useState<number | null>(0)
  const [markedTests, setMarkedTests] = useState<number[]>([])
  const markCurrentTest = useCallback(() => {
    setMarkedTests((prev) =>
      withoutDuplicates([...prev, shouldBePresent(currentTestNumber)]),
    )
  }, [currentTestNumber])
  const unmarkCurrentTest = useCallback(() => {
    setMarkedTests((prev) =>
      prev.filter((test) => test !== shouldBePresent(currentTestNumber)),
    )
  }, [currentTestNumber])

  const { mutate: updateUser } = useUpdateUserMutation()
  const { state: userState } = useUserState()
  const firstTestCompletedAt = userState?.firstTestCompletedAt

  const answerCurrentTest = useCallback(
    (answer: number) => {
      if (
        shouldBePresent(currentTestNumber) + 1 === testSize &&
        !firstTestCompletedAt
      ) {
        updateUser({
          firstTestCompletedAt: Date.now(),
        })
      }

      setAnswers((prev) => [...prev, answer])
      setCurrentTestNumber((prev) => {
        const next = shouldBePresent(prev) + 1
        if (next < testSize) return next

        return null
      })
    },
    [currentTestNumber, updateUser, firstTestCompletedAt],
  )

  const testsOptions = useMemo(
    () => (testPreference === 'all' ? tickets : completedTickets),
    [completedTickets, testPreference, tickets],
  )
  const [tests, setTests] = useState<EnhancedTicket[]>(() =>
    sampleArray(testsOptions, testSize),
  )

  const restart = useCallback(() => {
    setTests(sampleArray(testsOptions, testSize))
    setCurrentTestNumber(0)
    setAnswers([])
    setMarkedTests([])
  }, [testsOptions])

  useEffectOnDependencyChange(() => {
    restart()
  }, [testPreference, testsOptions])

  if (tests.length < testSize) {
    return <Text>Not enough tests options for a test</Text>
  }

  return (
    <CategoryTestContext.Provider
      value={{
        testPreference,
        setTestPreference,
        completedTickets,

        markedTests,
        markCurrentTest,
        unmarkCurrentTest,

        currentTestNumber,
        answerCurrentTest,
        answers,
        tests,
        restart,
      }}
    >
      {children}
    </CategoryTestContext.Provider>
  )
}
