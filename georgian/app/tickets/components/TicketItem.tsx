import { HStack, VStack } from '@lib/ui/layout/Stack'
import { Text, TextColor } from '@lib/ui/text'
import styled from 'styled-components'
import { EnhancedTicket } from '@georgian/entities/EnhancedTicket'

import { getColor } from '@lib/ui/theme/getters'
import { ticketAnswerLetters } from '@georgian/entities/Ticket'
import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'
import { TicketBreakdown } from './TicketBreakdown'
import { UniformColumnGrid } from '@lib/ui/layout/UniformColumnGrid'
import { SafeImage } from '@lib/ui/images/SafeImage'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { panelDefaultPadding } from '@lib/ui/panel/Panel'
import { TicketCompletionStatus } from './TicketCompletionStatus'

interface TicketItemProps {
  ticket: EnhancedTicket
  falseAnswer?: number
}

const Container = styled(UniformColumnGrid)`
  line-height: 1.5;

  border-radius: 16px;
  overflow: hidden;
  border: 2px solid ${getColor('foreground')};

  > * {
    padding: 20px;
    background: ${getColor('foreground')};
  }
`

const Header = styled(HStack)``

const InfoSection = styled(VStack)`
  gap: 16px;
  padding: 0;

  > * {
    padding: ${toSizeUnit(panelDefaultPadding)};
  }
`

const TicketImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  padding: 0;
`

export const TicketItem = ({ ticket, falseAnswer }: TicketItemProps) => {
  const { ticketNumber, question, prompt } = ticket

  return (
    <VStack gap={8}>
      <Header fullWidth alignItems="center" justifyContent="space-between">
        <Text size={20} weight="bold" color="shy" as="h3">
          #{ticketNumber}
        </Text>
        <TicketCompletionStatus value={ticket} />
      </Header>
      <Container gap={2} minChildrenWidth={320}>
        <SeparatedByLine gap={16}>
          <VStack gap={4}>
            <Text color="contrast" weight="semibold">
              {question.content}
            </Text>
            {prompt && <Text>{prompt}</Text>}
          </VStack>
          <VStack gap={4}>
            {ticket.answers.map((answer, number) => {
              let color: TextColor = answer.isCorrect ? 'contrast' : 'shy'
              if (falseAnswer !== undefined) {
                if (number === falseAnswer) {
                  color = 'alert'
                } else if (answer.isCorrect) {
                  color = 'success'
                }
              }
              return (
                <Text color={color} key={number}>
                  {ticketAnswerLetters[number]}. {answer.content}
                </Text>
              )
            })}
          </VStack>
        </SeparatedByLine>
        <InfoSection>
          <TicketBreakdown ticket={ticket} />
          {ticket.imageUrl && (
            <SafeImage
              src={ticket.imageUrl}
              render={(props) => (
                <TicketImage
                  {...props}
                  src={ticket.imageUrl}
                  alt={question.content}
                />
              )}
            />
          )}
        </InfoSection>
      </Container>
    </VStack>
  )
}
