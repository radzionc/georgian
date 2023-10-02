import { TicketCategory, ticketCategoryName } from '@georgian/entities/Ticket'
import { VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { Page } from 'layout/Page'
import { TicketItem } from './TicketItem'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { useQueryParamState } from 'navigation/hooks/useQueryParamState'
import { toBatches } from '@georgian/utils/array/toBatches'
import styled from 'styled-components'
import { ExhaustiveNavigation } from 'navigation/components/ExhaustiveNavigation'
import { MinimalisticFooterPagination } from 'navigation/components/MinimalisticFooterPagination'
import { useRef } from 'react'
import { useEffectOnDependencyChange } from '@georgian/ui/hooks/useEffectOnDependencyChange'

export interface TicketsCategoryPageProps {
  category: TicketCategory
  tickets: TranslatedTicket[]
}

const batchSize = 20

const PageTitle = styled(Text)`
  padding-top: 40px;
`

export const TicketsCategoryPage: Page<TicketsCategoryPageProps> = ({
  category,
  tickets,
}) => {
  const [ticket, setTicket] = useQueryParamState<number>('ticket', 1)

  const batches = toBatches(tickets, batchSize)
  const pageCount = Math.ceil(tickets.length / batchSize)
  const currentBatchIndex = Math.floor(ticket / batchSize)
  const currentBatch = batches[currentBatchIndex]

  const navigationRef = useRef<HTMLDivElement>(null)
  useEffectOnDependencyChange(() => {
    if (navigationRef.current) {
      navigationRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentBatchIndex])

  return (
    <VStack alignItems="center" fullWidth>
      <VStack style={{ maxWidth: 600 }} fullWidth gap={40}>
        <PageTitle color="contrast" as="h1" centered size={32}>
          {ticketCategoryName[category]} Tickets For Georgian Citizenship Exam
        </PageTitle>
        <div ref={navigationRef}>
          <ExhaustiveNavigation
            itemsCount={pageCount}
            renderItem={(pageNumber) => {
              const start = pageNumber * batchSize + 1
              const end = start + batchSize - 1

              if (end === start) {
                return start
              }

              return `${start}-${end}`
            }}
            value={currentBatchIndex}
            onChange={(page) => setTicket(page * batchSize + 1)}
          />
        </div>
        {currentBatch.map((ticket) => (
          <TicketItem ticket={ticket} key={ticket.ticketNumber} />
        ))}
        <MinimalisticFooterPagination
          itemsCount={pageCount}
          value={currentBatchIndex}
          onChange={(page) => setTicket(page * batchSize + 1)}
        />
      </VStack>
    </VStack>
  )
}
