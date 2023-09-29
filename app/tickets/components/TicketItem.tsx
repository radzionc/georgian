import { Ticket, languageName } from '@georgian/entities/Ticket'
import { SeparatedByLine } from '@georgian/ui/ui/SeparatedByLine'
import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import styled from 'styled-components'

interface TicketItemProps {
  ticket: Ticket
}

const Content = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 320px 320px;
`

const Translation = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 1fr;
`

export const TicketItem = ({ ticket }: TicketItemProps) => {
  const { ticketNumber, question, prompt, answers } = ticket

  return (
    <HStack gap={8} alignItems="start">
      <Text as="h3" color="shy" size={16}>
        #{ticketNumber}
      </Text>
      <Content>
        <VStack gap={20}>
          <VStack gap={8}>
            <Text as="h4" size={16}>
              {question}
            </Text>
            {prompt && <Text>{prompt}</Text>}
          </VStack>
          <VStack gap={8}>
            {ticket.answers.map((answer, number) => (
              <Text color={answer.isCorrect ? 'success' : 'shy'} key={number}>
                {answer.content}
              </Text>
            ))}
          </VStack>
        </VStack>
        <SeparatedByLine gap={20}>
          {answers
            .filter((answer) => answer.translation?.en)
            .map((answer) => {
              return (
                <Translation key={answer.content}>
                  <Text color="shy">{languageName.ka}:</Text>
                  <Text>{answer.content}</Text>
                  <Text color="shy">{languageName.en}:</Text>
                  <Text>{answer.translation?.en}</Text>
                </Translation>
              )
            })}
        </SeparatedByLine>
      </Content>
    </HStack>
  )
}
