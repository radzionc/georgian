import { InterviewQuestion } from '@georgian/entities/InterviewQuestion'
import { WebsitePageContent } from '../../layout/components/WebsitePageContent'
import { VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { useCopy } from '../../copy/CopyProvider'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'

export type CuratedQuestionsPageProps = {
  questions: InterviewQuestion[]
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
    </WebsitePageContent>
  )
}
