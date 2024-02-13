import { toBatches } from '@lib/utils/array/toBatches'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { useEffect, useRef } from 'react'
import { Button } from '@lib/ui/buttons/Button'
import { getLastItem } from '@lib/utils/array/getLastItem'
import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'

interface TicketsNavigationProps {
  currentTicketNumber: number
  setCurrentTicketNumber: (value: number) => void
  tickets: TranslatedTicket[]
  renderTicket: (ticket: TranslatedTicket) => JSX.Element
}

const batchSize = 20

export const TicketsNavigation = ({
  currentTicketNumber,
  setCurrentTicketNumber,
  tickets,
  renderTicket,
}: TicketsNavigationProps) => {
  const batches = toBatches(tickets, batchSize)
  const currentBatchIndex = Math.floor(currentTicketNumber / batchSize)
  const currentBatch = batches[currentBatchIndex]

  const ticketRefs = useRef<HTMLElement[]>([])
  useEffect(() => {
    if (!ticketRefs.current[currentTicketNumber]) return

    if (currentBatch[0].ticketNumber === currentTicketNumber) return

    ticketRefs.current[currentTicketNumber].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [currentBatch, currentTicketNumber])

  return (
    <>
      <VStack alignItems="center">
        <HStack
          justifyContent="center"
          style={{ maxWidth: 600 }}
          alignItems="center"
          gap={4}
          wrap="wrap"
        >
          {batches.map((batch, index) => (
            <Button
              key={index}
              onClick={() => setCurrentTicketNumber(batch[0].ticketNumber)}
              kind="secondary"
            >
              {batch[0].ticketNumber} - {getLastItem(batch).ticketNumber}
            </Button>
          ))}
        </HStack>
      </VStack>
      <SeparatedByLine gap={40} alignItems="start">
        {currentBatch.map((ticket) => (
          <div
            ref={(el) => {
              if (el) {
                ticketRefs.current[ticket.ticketNumber] = el
              }
            }}
            key={ticket.ticketNumber}
          >
            {renderTicket(ticket)}
          </div>
        ))}
      </SeparatedByLine>
    </>
  )
}
