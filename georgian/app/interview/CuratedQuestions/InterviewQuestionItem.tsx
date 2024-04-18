import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { ComponentWithValueProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { attempt } from '@lib/utils/attempt'
import { VolumeIcon } from '@lib/ui/icons/VolumeIcon'
import styled from 'styled-components'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { ArrowRightIcon } from '@lib/ui/icons/ArrowRightIcon'
import { getColor } from '@lib/ui/theme/getters'
import { VStack } from '@lib/ui/layout/Stack'
import { sameDimensions } from '@lib/ui/css/sameDimensions'

const AnswerIconContainer = styled(IconWrapper)`
  color: ${getColor('textShy')};
  width: 100%;
`

const rowIdentifierSize = '36px'

const InterviewQuestionRow = styled.div`
  display: grid;
  grid-template-columns: ${rowIdentifierSize} 1fr;
  align-items: center;
  gap: 4px;
  line-height: 1.5;
`

const SoundButton = styled(IconButton)`
  ${sameDimensions(rowIdentifierSize)}
`

export const InterviewQuestionItem = ({
  value,
}: ComponentWithValueProps<EnhancedInterviewQuestion>) => {
  const questionTranslation = value.translation[value.question]

  return (
    <VStack gap={8}>
      <VStack gap={4}>
        <InterviewQuestionRow>
          {value.questionAudioUrl ? (
            <SoundButton
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
        </InterviewQuestionRow>
        <InterviewQuestionRow>
          {questionTranslation && (
            <>
              <div />
              <Text color="supporting">{questionTranslation}</Text>
            </>
          )}
        </InterviewQuestionRow>
      </VStack>
      {value.answer && (
        <InterviewQuestionRow>
          <AnswerIconContainer>
            <ArrowRightIcon />
          </AnswerIconContainer>
          <Text color="shy">{value.answer}</Text>
        </InterviewQuestionRow>
      )}
    </VStack>
  )
}
