import { Text } from '@georgian/ui/text'
import { useCategoryTest } from './CategoryTestProvider'
import { HStack, VStack } from '@georgian/ui/layout/Stack'
import { UnstyledButton } from '@georgian/ui/buttons/UnstyledButton'
import styled from 'styled-components'
import { interactive } from '@georgian/ui/css/interactive'
import { getColor } from '@georgian/ui/theme/getters'
import { transition } from '@georgian/ui/css/transition'
import { ticketAnswerLetters } from '@georgian/entities/Ticket'
import { borderRadius } from '@georgian/ui/css/borderRadius'
import { Panel } from '@georgian/ui/panel/Panel'
import { TestHeader } from './TestHeader'

interface CategoryTestItemProps {
  testNumber: number
}

const Container = styled(VStack)`
  font-size: 20px;
  font-weight: 500;
`

const Option = styled(UnstyledButton)`
  ${interactive};
  ${transition};
  ${borderRadius.m};
  padding: 12px 16px;
  border: 2px solid ${getColor('mist')};

  :hover {
    border-color: ${getColor('mistExtra')};
    color: ${getColor('contrast')};
  }
`

export const CategoryTestItem = ({ testNumber }: CategoryTestItemProps) => {
  const { tests, answerCurrentTest } = useCategoryTest()
  const { question, prompt, answers } = tests[testNumber]

  return (
    <VStack gap={20}>
      <TestHeader />
      <Panel>
        <Container gap={40}>
          <VStack gap={20}>
            <Text>{question}</Text>
            {prompt && <Text>{prompt}</Text>}
          </VStack>
          <VStack gap={20}>
            {answers.map((answer, index) => (
              <Option onClick={() => answerCurrentTest(index)} key={index}>
                <HStack fullWidth gap={8}>
                  <Text>{ticketAnswerLetters[index]}.</Text>
                  <Text>{answer.content}</Text>
                </HStack>
              </Option>
            ))}
          </VStack>
        </Container>
      </Panel>
    </VStack>
  )
}
