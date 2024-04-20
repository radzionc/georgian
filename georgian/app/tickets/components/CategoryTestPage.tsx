import { TicketCategory } from '@georgian/entities/Ticket'
import { CategoryTestProvider } from './CategoryTestProvider'
import { CategoryTestContent } from './CategoryTestContent'
import { CategoryTestPageHeader } from './CategoryTestPageHeader'
import { EnhancedTicket } from '@georgian/entities/EnhancedTicket'
import { ClientOnly } from '@lib/ui/base/ClientOnly'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { useCopy } from '../../copy/CopyProvider'
import { WebsitePageContent } from '../../layout/components/WebsitePageContent'
import { injectVariables } from '@lib/utils/template/injectVariables'

export interface CategoryTestPageProps {
  category: TicketCategory
  tickets: EnhancedTicket[]
}

export const CategoryTestPage = ({
  category,
  tickets,
}: CategoryTestPageProps) => {
  const copy = useCopy()
  return (
    <WebsitePageContent maxWidth={800}>
      <PageMetaTags
        title={copy.categoryTestPageMetaTagTitle(
          {
            category: copy[category],
          },
          injectVariables,
        )}
        description={copy.categoryTestPageMetaTagDescription(
          {
            category: copy[category],
          },
          injectVariables,
        )}
        image={`/images/${category}.png`}
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
