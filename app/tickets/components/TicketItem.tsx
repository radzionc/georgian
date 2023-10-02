import { SeparatedByLine } from '@georgian/ui/ui/SeparatedByLine'
import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import styled from 'styled-components'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { languageName } from '@georgian/internalization/Language'

interface TicketItemProps {
  ticket: TranslatedTicket
}

const Content = styled.div`
  display: grid;
  gap: 20px;
  max-width: 640px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const Translation = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 1fr;
`

export const TicketItem = ({ ticket }: TicketItemProps) => {
  const { ticketNumber, question, prompt, translation } = ticket

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
          {Object.entries(translation).map(([original, translation]) => (
            <Translation key={original}>
              <Text color="shy">{languageName.ka}:</Text>
              <Text>{original}</Text>
              <Text color="shy">{languageName.en}:</Text>
              <Text>{translation}</Text>
            </Translation>
          ))}
        </SeparatedByLine>
      </Content>
    </HStack>
  )
}
