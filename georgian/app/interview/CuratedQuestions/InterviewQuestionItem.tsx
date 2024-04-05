import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { interviewQuestionTags } from '@georgian/entities/InterviewQuestion'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import { ComponentWithValueProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { useTheme } from 'styled-components'
import { Tag } from '@lib/ui/tags/Tag'
import { useCopy } from '../../copy/CopyProvider'

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
      <Text color="contrast" weight="semibold">
        {value.question}
      </Text>

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
