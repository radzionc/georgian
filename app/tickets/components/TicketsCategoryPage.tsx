import { TicketCategory, ticketCategoryName } from '@georgian/entities/Ticket'
import { VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { Page } from 'layout/Page'
import { TicketItem } from './TicketItem'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { useQueryParamState } from 'navigation/hooks/useQueryParamState'
import { PaginatedView } from '@georgian/ui/view/components/PaginatedView'
import { toBatches } from '@georgian/utils/array/toBatches'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'

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
  const [ticketNumber, setTicketNumber] = useQueryParamState<number>(
    'ticket',
    1,
  )

  const ticketRefs = useRef<HTMLElement[]>([])
  useEffect(() => {
    if (!ticketRefs.current[ticketNumber]) return

    ticketRefs.current[ticketNumber].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [ticketNumber])

  const batches = toBatches(tickets, batchSize)
  const pageCount = Math.ceil(tickets.length / batchSize)
  const currentBatchIndex = Math.floor(ticketNumber / batchSize)
  const currentBatch = batches[currentBatchIndex]

  return (
    <VStack alignItems="center" fullWidth>
      <VStack style={{ maxWidth: 600 }} fullWidth gap={40}>
        <PageTitle color="contrast" as="h1" centered size={32}>
          {ticketCategoryName[category]} Tickets For Georgian Citizenship Exam
        </PageTitle>
        <PaginatedView
          pageCount={pageCount}
          items={currentBatch}
          currentPage={currentBatchIndex}
          setCurrentPage={(page) => setTicketNumber(page * batchSize + 1)}
          renderItem={(ticket) => (
            <div
              ref={(el) => {
                if (el) {
                  ticketRefs.current[ticket.ticketNumber] = el
                }
              }}
              key={ticket.ticketNumber}
            >
              <TicketItem ticket={ticket} />
            </div>
          )}
          renderPageOption={(pageNumber) => {
            const start = pageNumber * batchSize + 1
            const end = start + batchSize - 1

            if (end === start) {
              return start
            }

            return `${start} - ${end}`
          }}
        />
      </VStack>
    </VStack>
  )
}
