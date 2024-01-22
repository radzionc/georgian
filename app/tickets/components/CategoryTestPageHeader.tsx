import { TicketCategory, ticketCategoryEmoji } from '@georgian/entities/Ticket'
import { Text } from '@georgian/ui/text'
import { WebsitePageHeader } from 'layout/components/WebsitePageHeader'
import { CategoryTestTicketsFilter } from './CategoryTestTicketsFilter'
import { useCategoryTest } from './CategoryTestProvider'
import { Button } from '@georgian/ui/buttons/Button'
import { useCopy } from 'copy/CopyProvider'

export interface CategoryTestPageHeaderProps {
  category: TicketCategory
}

export const CategoryTestPageHeader = ({
  category,
}: CategoryTestPageHeaderProps) => {
  const copy = useCopy()

  const { currentTestNumber, restart } = useCategoryTest()

  return (
    <WebsitePageHeader
      title={
        <>
          <Text as="span" style={{ marginRight: 8 }}>
            {ticketCategoryEmoji[category]}
          </Text>
          {copy.testPageTitle({ category: copy[category] })}
        </>
      }
    >
      {currentTestNumber !== 0 ? (
        <Button kind="secondary" onClick={restart}>
          {copy.restart}
        </Button>
      ) : (
        <CategoryTestTicketsFilter />
      )}
    </WebsitePageHeader>
  )
}
