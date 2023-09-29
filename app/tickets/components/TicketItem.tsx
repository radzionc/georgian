import { Ticket } from '@georgian/entities/Ticket'
import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'

interface TicketItemProps {
  ticket: Ticket
}

export const TicketItem = ({ ticket }: TicketItemProps) => {
  const { ticketNumber, question, prompt } = ticket

  return (
    <HStack gap={8} alignItems="start">
      <Text as="h3" color="shy" size={16}>
        #{ticketNumber}
      </Text>
      <VStack gap={20}>
        <VStack gap={8}>
          <Text as="h4" size={16}>
            {question}
          </Text>
          {prompt && <Text>{prompt}</Text>}
        </VStack>
        <VStack gap={8}>
          {ticket.answers.map((answer, number) => (
            <Text color={answer.isCorrect ? 'success' : undefined} key={number}>
              {answer.content}
            </Text>
          ))}
        </VStack>
      </VStack>
    </HStack>
  )
}
