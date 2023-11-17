import { ticketCategories } from '@georgian/entities/Ticket'
import { HStack } from '@georgian/ui/ui/Stack'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { useCopy } from 'copy/CopyProvider'
import { Link } from 'navigation/components/Link'
import { getTicketCategoryPath } from 'navigation/utils'

export const PrimaryActions = () => {
  const copy = useCopy()
  return (
    <HStack gap={4} alignItems="center">
      {ticketCategories.map((category) => (
        <Link key={category} href={getTicketCategoryPath(category)}>
          <Button size="s" key={category} kind="ghost">
            {copy[category]}
          </Button>
        </Link>
      ))}
    </HStack>
  )
}
