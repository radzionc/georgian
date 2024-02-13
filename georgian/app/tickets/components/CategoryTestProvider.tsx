import { TicketCategory } from '@georgian/entities/Ticket'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { createContextHook } from '@lib/ui/state/createContextHook'
import { Text } from '@lib/ui/text'
import { createContext, useCallback, useMemo, useState } from 'react'
import { sampleArray } from '@lib/utils/array/sampleArray'
import { useEffectOnDependencyChange } from '@lib/ui/hooks/useEffectOnDependencyChange'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'
import { useCompletedTickets } from '../hooks/useCompletedTickets'

export const ticketsFilterOptions = ['all', 'completed'] as const
export type TicketsFilter = (typeof ticketsFilterOptions)[number]

interface CategoryTestProviderState {
  ticketsFilter: TicketsFilter
  setTicketsFilter: (filter: TicketsFilter) => void
  completedTickets: TranslatedTicket[]

  markedTests: number[]
  markCurrentTest: () => void
  unmarkCurrentTest: () => void

  tests: TranslatedTicket[]
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
  tickets: TranslatedTicket[]
}

export const CategoryTestProvider = ({
  category,
  tickets,
  children,
}: CategoryTestProviderProps) => {
  const [allCompletedTickets] = useCompletedTickets()
  const completedTickets = useMemo(
    () =>
      allCompletedTickets
        .filter((ticket) => ticket.category === category)
        .map((ticket) =>
          tickets.find((t) => t.ticketNumber === ticket.ticketNumber),
        )
        .map((ticket) => shouldBePresent(ticket)),
    [allCompletedTickets, category, tickets],
  )

  const hasEnoughCompletedTickets = completedTickets.length > testSize
  const [filter, setFilter] = useState<TicketsFilter>(
    hasEnoughCompletedTickets ? 'completed' : 'all',
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

  const answerCurrentTest = useCallback((answer: number) => {
    setAnswers((prev) => [...prev, answer])
    setCurrentTestNumber((prev) => {
      if (prev === null) return null

      const next = prev + 1
      if (next < testSize) return next

      return null
    })
  }, [])

  const testsOptions = useMemo(
    () => (filter === 'all' ? tickets : completedTickets),
    [filter, tickets, completedTickets],
  )
  const [tests, setTests] = useState<TranslatedTicket[]>(() =>
    sampleArray(testsOptions, testSize),
  )

  const restart = useCallback(() => {
    setTests(sampleArray(testsOptions, testSize))
    setCurrentTestNumber(0)
    setAnswers([])
  }, [testsOptions])

  useEffectOnDependencyChange(() => {
    restart()
  }, [filter, testsOptions])

  if (tests.length < testSize) {
    return <Text>Not enough tests options for a test</Text>
  }

  return (
    <CategoryTestContext.Provider
      value={{
        ticketsFilter: filter,
        setTicketsFilter: setFilter,
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
