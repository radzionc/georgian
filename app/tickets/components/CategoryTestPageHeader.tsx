import {
  TicketCategory,
  ticketCategoryEmoji,
  ticketCategoryName,
} from '@georgian/entities/Ticket'
import { Text } from '@georgian/ui/ui/Text'
import { WebsitePageHeader } from 'layout/components/WebsitePageHeader'
import { CategoryTestTicketsFilter } from './CategoryTestTicketsFilter'
import { testSize, useCategoryTest } from './CategoryTestProvider'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { HStack } from '@georgian/ui/ui/Stack'

export interface CategoryTestPageHeaderProps {
  category: TicketCategory
}

export const CategoryTestPageHeader = ({
  category,
}: CategoryTestPageHeaderProps) => {
  const { currentTestNumber, restart } = useCategoryTest()

  return (
    <WebsitePageHeader
      title={
        <>
          <Text as="span" style={{ marginRight: 8 }}>
            {ticketCategoryEmoji[category]}
          </Text>
          Georgian {ticketCategoryName[category]} Test
        </>
      }
    >
      {currentTestNumber !== 0 ? (
        <HStack alignItems="center" gap={16}>
          {currentTestNumber !== null && (
            <Text weight="semibold">
              {currentTestNumber} / {testSize}
            </Text>
          )}
          <Button kind="secondary" onClick={restart}>
            Restart
          </Button>
        </HStack>
      ) : (
        <CategoryTestTicketsFilter />
      )}
    </WebsitePageHeader>
  )
}
