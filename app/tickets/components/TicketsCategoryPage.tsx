import { TicketCategory, ticketCategoryName } from '@georgian/entities/Ticket'
import { VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { Page } from 'layout/Page'
import { TicketItem } from './TicketItem'
import { SeparatedByLine } from '@georgian/ui/ui/SeparatedByLine'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'

export interface TicketsCategoryPageProps {
  category: TicketCategory
  tickets: TranslatedTicket[]
}

export const TicketsCategoryPage: Page<TicketsCategoryPageProps> = ({
  category,
  tickets,
}) => {
  return (
    <VStack alignItems="center" gap={80}>
      <Text
        style={{ maxWidth: 480 }}
        color="contrast"
        as="h1"
        centered
        size={32}
      >
        Georgian Citizenship Exam: {ticketCategoryName[category]} Tickets
      </Text>
      <SeparatedByLine gap={40} alignItems="start">
        {tickets.map((ticket, number) => (
          <TicketItem ticket={ticket} key={number} />
        ))}
      </SeparatedByLine>
    </VStack>
  )
}
