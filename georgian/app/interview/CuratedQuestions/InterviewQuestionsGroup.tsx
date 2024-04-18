import { InterviewQuestionCategory } from '@georgian/entities/InterviewQuestion'
import { VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { useCopy } from '../../copy/CopyProvider'
import { InterviewQuestionItem } from './InterviewQuestionItem'
import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'

type InterviewQuestionsGroupProps = {
  category: InterviewQuestionCategory
  questions: EnhancedInterviewQuestion[]
}

export const InterviewQuestionsGroup = ({
  category,
  questions,
}: InterviewQuestionsGroupProps) => {
  const copy = useCopy()

  return (
    <VStack gap={20}>
      <Text as="h3" size={18} color="contrast">
        {copy[category]}
      </Text>
      {questions.map((question) => (
        <InterviewQuestionItem key={question.question} value={question} />
      ))}
    </VStack>
  )
}
