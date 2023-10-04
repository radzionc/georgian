import { TicketCategory } from '@georgian/entities/Ticket'
import { WebsitePageContent } from 'layout/components/WebsitePageContent'
import { ClientOnly } from '@georgian/ui/ui/ClientOnly'
import { CategoryTestProvider } from './CategoryTestProvider'
import { CategoryTestContent } from './CategoryTestContent'
import { CategoryTestPageHeader } from './CategoryTestPageHeader'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'

export interface CategoryTestPageProps {
  category: TicketCategory
  tickets: TranslatedTicket[]
}

export const CategoryTestPage = ({
  category,
  tickets,
}: CategoryTestPageProps) => {
  return (
    <WebsitePageContent>
      <CategoryTestProvider category={category} tickets={tickets}>
        <ClientOnly>
          <CategoryTestPageHeader category={category} />
          <CategoryTestContent />
        </ClientOnly>
      </CategoryTestProvider>
    </WebsitePageContent>
  )
}
