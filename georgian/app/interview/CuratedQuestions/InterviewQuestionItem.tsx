import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { interviewQuestionTags } from '@georgian/entities/InterviewQuestion'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import { ComponentWithValueProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { useTheme } from 'styled-components'
import { Tag } from '@lib/ui/tags/Tag'
import { useCopy } from '../../copy/CopyProvider'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { attempt } from '@lib/utils/attempt'
import { VolumeIcon } from '@lib/ui/icons/VolumeIcon'

export const InterviewQuestionItem = ({
  value,
}: ComponentWithValueProps<EnhancedInterviewQuestion>) => {
  const questionTranslation = value.translation[value.question]

  const {
    colors: { getLabelColor },
  } = useTheme()

  const copy = useCopy()

  return (
    <VStack gap={8}>
      <HStack alignItems="center" gap={8}>
        {value.questionAudioUrl && (
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
        )}
        <Text color="contrast" weight="semibold">
          {value.question}
        </Text>
      </HStack>

      {questionTranslation && (
        <Text color="supporting">{questionTranslation}</Text>
      )}
      <HStack gap={8} wrap="wrap">
        {value.tags.map((value) => (
          <Tag
            $color={getLabelColor(interviewQuestionTags.indexOf(value))}
            key={value}
          >
            {copy[value]}
          </Tag>
        ))}
      </HStack>
    </VStack>
  )
}
