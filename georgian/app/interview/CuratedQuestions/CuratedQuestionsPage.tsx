import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { WebsitePageContent } from '../../layout/components/WebsitePageContent'
import { VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { useCopy } from '../../copy/CopyProvider'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { InterviewQuestionItem } from './InterviewQuestionItem'
import { ShyInfoBlock } from '@lib/ui/info/ShyInfoBlock'

export type CuratedQuestionsPageProps = {
  questions: EnhancedInterviewQuestion[]
}

export const CuratedQuestionsPage = ({
  questions,
}: CuratedQuestionsPageProps) => {
  const copy = useCopy()

  return (
    <WebsitePageContent maxWidth={600}>
      <PageMetaTags
        title={copy.interviewQuestionPageMetaTagTitle}
        description={copy.interviewQuestionPageMetaTagDescription}
        image={`/images/interview-questions.webp`}
      />
      <VStack gap={16}>
        <Text color="contrast" as="h1" size={20}>
          {copy.interviewQuestionsPageTitle}
        </Text>
        <Text height="large">{copy.interviewQuestionsPageSubTitle}</Text>
      </VStack>
      <ShyInfoBlock>{copy.wipPage}</ShyInfoBlock>
      <VStack gap={40}>
        {questions.map((question) => (
          <InterviewQuestionItem key={question.question} value={question} />
        ))}
      </VStack>
    </WebsitePageContent>
  )
}
