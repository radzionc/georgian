import { SeparatedByLine } from '@georgian/ui/ui/SeparatedByLine'
import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import styled, { css } from 'styled-components'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { Panel } from '@georgian/ui/ui/Panel/Panel'
import { without } from '@georgian/utils/array/without'
import {
  isTicketCompleted,
  useCompletedTickets,
  withoutTicket,
} from 'tickets/hooks/useCompletedTickets'
import { CheckCircleIcon } from '@georgian/ui/ui/icons/CheckCircleIcon'
import { UnstyledButton } from '@georgian/ui/ui/buttons/UnstyledButton'
import { transition } from '@georgian/ui/css/transition'
import { interactive } from '@georgian/ui/css/interactive'
import { getColor } from '@georgian/ui/ui/theme/getters'
import { ClientOnly } from '@georgian/ui/ui/ClientOnly'

interface TicketItemProps {
  ticket: TranslatedTicket
}

const Container = styled(Panel)`
  line-height: 1.5;
`

const answerLetters = ['ა', 'ბ', 'გ', 'დ']

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

export const TicketItem = ({ ticket }: TicketItemProps) => {
  const { ticketNumber, question, translation } = ticket

  const questionTranslation = translation[question]

  const [completedTickets, setCompletedTickets] = useCompletedTickets()
  const isCompleted = isTicketCompleted(completedTickets, ticket)

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
              <div>{isCompleted ? 'learned' : 'mark as learned'}</div>
            </HStack>
          </CompletionButton>
        </ClientOnly>
      </Header>
      <Container kind="secondary">
        <SeparatedByLine gap={16}>
          <VStack gap={8}>
            <VStack gap={8}>
              {without(Object.keys(translation), question).map((original) => (
                <HStack key={original} gap={12} alignItems="start">
                  <Text size={24} color="contrast">
                    ✨
                  </Text>
                  <VStack key={original}>
                    <Text size={18} weight="bold">
                      {original}
                    </Text>
                    <Text size={18} weight="bold" color="shy">
                      {translation[original]}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </VStack>
          <VStack gap={8}>
            <VStack gap={4}>
              <Text weight="semibold">{question}</Text>
              {questionTranslation && (
                <Text weight="semibold" color="shy">
                  {questionTranslation}
                </Text>
              )}
            </VStack>
            <VStack gap={4}>
              {ticket.answers.map((answer, number) => (
                <Text color={answer.isCorrect ? 'regular' : 'shy'} key={number}>
                  {answerLetters[number]}. {answer.content}
                </Text>
              ))}
            </VStack>
          </VStack>
        </SeparatedByLine>
      </Container>
    </VStack>
  )
}
