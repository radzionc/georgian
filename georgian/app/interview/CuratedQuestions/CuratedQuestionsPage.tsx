import { EnhancedInterviewQuestion } from '@georgian/entities/EnhancedInterviewQuestion'
import { WebsitePageContent } from '../../layout/components/WebsitePageContent'
import { VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { useCopy } from '../../copy/CopyProvider'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { ShyInfoBlock } from '@lib/ui/info/ShyInfoBlock'
import { useMemo } from 'react'
import { groupItems } from '@lib/utils/array/groupItems'
import { order } from '@lib/utils/array/order'
import { interviewQuestionCategories } from '@georgian/entities/InterviewQuestion'
import { InterviewQuestionsGroup } from './InterviewQuestionsGroup'
import { getRecordKeys } from '@lib/utils/record/getRecordKeys'
import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'

export type CuratedQuestionsPageProps = {
  questions: EnhancedInterviewQuestion[]
}

export const CuratedQuestionsPage = ({
  questions,
}: CuratedQuestionsPageProps) => {
  const copy = useCopy()

  const groups = useMemo(() => {
    return groupItems(questions, (question) => question.category)
  }, [questions])

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
      <SeparatedByLine gap={40}>
        {order(
          getRecordKeys(groups),
          (category) => interviewQuestionCategories.indexOf(category),
          'asc',
        ).map((category) => (
          <InterviewQuestionsGroup
            key={category}
            category={category}
            questions={groups[category]}
          />
        ))}
      </SeparatedByLine>
    </WebsitePageContent>
  )
}
