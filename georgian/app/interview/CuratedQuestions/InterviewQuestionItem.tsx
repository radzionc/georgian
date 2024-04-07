import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { ComponentWithValueProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { attempt } from '@lib/utils/attempt'
import { VolumeIcon } from '@lib/ui/icons/VolumeIcon'
import styled from 'styled-components'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { ArrowRightIcon } from '@lib/ui/icons/ArrowRightIcon'
import { Center } from '@lib/ui/layout/Center'
import { getColor } from '@lib/ui/theme/getters'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 8px;
  line-height: 1.5;
`

const AnswerIconContainer = styled(IconWrapper)`
  color: ${getColor('textShy')};
`

export const InterviewQuestionItem = ({
  value,
}: ComponentWithValueProps<EnhancedInterviewQuestion>) => {
  const questionTranslation = value.translation[value.question]

  return (
    <Container>
      {value.questionAudioUrl ? (
        <IconButton
          title="Play question"
          kind="secondary"
          onClick={() => {
            attempt(() => {
              const audio = new Audio(value.questionAudioUrl)
              audio.play()
            }, undefined)
          }}
          icon={<VolumeIcon />}
        />
      ) : (
        <div />
      )}
      <Text color="contrast" weight="semibold">
        {value.question}
      </Text>
      {questionTranslation && (
        <>
          <div />
          <Text color="supporting">{questionTranslation}</Text>
        </>
      )}

      {value.answer && (
        <>
          <Center>
            <AnswerIconContainer>
              <ArrowRightIcon />
            </AnswerIconContainer>
          </Center>
          <Text color="shy">{value.answer}</Text>
        </>
      )}
    </Container>
  )
}
