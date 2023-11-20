import { TicketCategory } from '@georgian/entities/Ticket'
import { WebsitePageContent } from 'layout/components/WebsitePageContent'
import { CategoryTestProvider } from './CategoryTestProvider'
import { CategoryTestContent } from './CategoryTestContent'
import { CategoryTestPageHeader } from './CategoryTestPageHeader'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { useCopy } from 'copy/CopyProvider'
import { ClientOnly } from '@georgian/ui/base/ClientOnly'
import { PageMetaTags } from '@georgian/ui/metadata/PageMetaTags'

export interface CategoryTestPageProps {
  category: TicketCategory
  tickets: TranslatedTicket[]
}

export const CategoryTestPage = ({
  category,
  tickets,
}: CategoryTestPageProps) => {
  const copy = useCopy()
  return (
    <WebsitePageContent>
      <PageMetaTags
        title={copy.categoryTestPageMetaTagTitle({
          category: copy[category],
        })}
        description={copy.categoryTestPageMetaTagDescription({
          category: copy[category],
        })}
      />
      <CategoryTestProvider category={category} tickets={tickets}>
        <ClientOnly>
          <CategoryTestPageHeader category={category} />
          <CategoryTestContent />
        </ClientOnly>
      </CategoryTestProvider>
    </WebsitePageContent>
  )
}
