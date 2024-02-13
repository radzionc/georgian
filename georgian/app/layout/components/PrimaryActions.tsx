import { ticketCategories } from '@georgian/entities/Ticket'
import { HStack } from '@lib/ui/layout/Stack'
import { Button } from '@lib/ui/buttons/Button'
import { useCopy } from '@georgian/app/copy/CopyProvider'
import { Link } from '@georgian/languages-ui/components/Link'
import { LanguageSelector } from '@georgian/languages-ui/components/LanguageSelector'
import { getTicketCategoryPath } from '../../navigation/utils'

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
      <LanguageSelector />
    </HStack>
  )
}
