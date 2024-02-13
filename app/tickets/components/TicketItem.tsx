import { HStack, VStack } from '@georgian/ui/layout/Stack'
import { Text, TextColor } from '@georgian/ui/text'
import styled, { css } from 'styled-components'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import {
  isTicketCompleted,
  useCompletedTickets,
  withoutTicket,
} from 'tickets/hooks/useCompletedTickets'
import { CheckCircleIcon } from '@georgian/ui/icons/CheckCircleIcon'
import { UnstyledButton } from '@georgian/ui/buttons/UnstyledButton'
import { transition } from '@georgian/ui/css/transition'
import { interactive } from '@georgian/ui/css/interactive'
import { getColor } from '@georgian/ui/theme/getters'
import { ticketAnswerLetters } from '@georgian/entities/Ticket'
import { useCopy } from 'copy/CopyProvider'
import { ClientOnly } from '@georgian/ui/base/ClientOnly'
import { SameWidthChildrenRow } from '@georgian/ui/layout/SameWidthChildrenRow'
import { SeparatedByLine } from '@georgian/ui/layout/SeparatedByLine'
import { TicketTranslations } from './TicketTranslations'

interface TicketItemProps {
  ticket: TranslatedTicket
  falseAnswer?: number
}

const Container = styled(SameWidthChildrenRow)`
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

const CompletionButton = styled(UnstyledButton)<{ isCompleted: boolean }>`
  font-weight: 500;
  ${transition};
  ${interactive};
  ${({ isCompleted }) =>
    isCompleted
      ? css`
          color: ${getColor('success')};
        `
      : css`
          color: ${getColor('textSupporting')};
          :hover {
            color: ${getColor('contrast')};
          }
        `};
`

export const TicketItem = ({ ticket, falseAnswer }: TicketItemProps) => {
  const copy = useCopy()
  const { ticketNumber, question, prompt, translation } = ticket

  const [completedTickets, setCompletedTickets] = useCompletedTickets()
  const isCompleted = isTicketCompleted(completedTickets, ticket)

  const hasTranslations = Object.keys(translation).length > 0

  return (
    <VStack gap={8}>
      <Header fullWidth alignItems="center" justifyContent="space-between">
        <Text size={20} weight="bold" color="shy" as="h3">
          #{ticketNumber}
        </Text>
        <ClientOnly>
          <CompletionButton
            onClick={() => {
              setCompletedTickets(
                isCompleted
                  ? withoutTicket(completedTickets, ticket)
                  : [...completedTickets, ticket],
              )
            }}
            isCompleted={isCompleted}
          >
            <HStack alignItems="center" gap={8}>
              <CheckCircleIcon />
              <div>{isCompleted ? copy.learned : copy.markAsLearned}</div>
            </HStack>
          </CompletionButton>
        </ClientOnly>
      </Header>
      <Container gap={2} minChildrenWidth={320}>
        <SeparatedByLine gap={16}>
          <VStack gap={4}>
            <Text color="contrast" weight="semibold">
              {question}
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
        {hasTranslations && <TicketTranslations ticket={ticket} />}
      </Container>
    </VStack>
  )
}
