import { TicketCategory } from '@georgian/entities/Ticket'
import { ComponentWithChildrenProps } from '@georgian/ui/props'
import { createContextHook } from '@georgian/ui/state/createContextHook'
import { Text } from '@georgian/ui/ui/Text'
import { shouldBeDefined } from '@georgian/utils/shouldBeDefined'
import { createContext, useCallback, useMemo, useState } from 'react'
import { useCompletedTickets } from 'tickets/hooks/useCompletedTickets'
import { sampleArray } from '@georgian/utils/array/sampleArray'
import { useEffectOnDependencyChange } from '@georgian/ui/hooks/useEffectOnDependencyChange'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'

export const ticketsFilterOptions = ['all', 'completed'] as const
export type TicketsFilter = (typeof ticketsFilterOptions)[number]

interface CategoryTestProviderState {
  ticketsFilter: TicketsFilter
  setTicketsFilter: (filter: TicketsFilter) => void
  completedTickets: TranslatedTicket[]

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
        .map((ticket) => shouldBeDefined(ticket)),
    [allCompletedTickets, category, tickets],
  )

  const hasEnoughCompletedTickets = completedTickets.length > testSize
  const [filter, setFilter] = useState<TicketsFilter>(
    hasEnoughCompletedTickets ? 'completed' : 'all',
  )

  const [answers, setAnswers] = useState<number[]>([])
  const [currentTestNumber, setCurrentTestNumber] = useState<number | null>(0)

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
