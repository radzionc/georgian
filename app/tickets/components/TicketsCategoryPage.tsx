import {
  Ticket,
  TicketCategory,
  ticketCategoryName,
} from '@georgian/entities/Ticket'
import { Center } from '@georgian/ui/ui/Center'
import { VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { Page } from 'layout/Page'
import { TicketItem } from './TicketItem'

export interface TicketsCategoryPageProps {
  category: TicketCategory
  tickets: Ticket[]
}

export const TicketsCategoryPage: Page<TicketsCategoryPageProps> = ({
  category,
  tickets,
}) => {
  return (
    <Center>
      <VStack style={{ maxWidth: 480 }} alignItems="center" gap={80}>
        <Text color="contrast" as="h1" centered size={32}>
          Georgian Citizenship Exam: {ticketCategoryName[category]} Tickets
        </Text>
        <VStack gap={40} alignItems="start">
          {tickets.map((ticket, number) => (
            <TicketItem ticket={ticket} key={number} />
          ))}
        </VStack>
      </VStack>
    </Center>
  )
}
