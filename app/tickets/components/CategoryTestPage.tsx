import { TicketCategory } from '@georgian/entities/Ticket'
import { WebsitePageContent } from 'layout/components/WebsitePageContent'
import { ClientOnly } from '@georgian/ui/ui/ClientOnly'
import { CategoryTestProvider } from './CategoryTestProvider'
import { CategoryTestContent } from './CategoryTestContent'
import { CategoryTestPageHeader } from './CategoryTestPageHeader'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { TranslatedPageProps } from 'copy/TranslatedPageProps'
import { MetaTags } from '@georgian/ui/metadata/MetaTags'
import { useCopy } from 'copy/CopyProvider'

export interface CategoryTestPageProps extends TranslatedPageProps {
  category: TicketCategory
  tickets: TranslatedTicket[]
}

export const CategoryTestPage = ({
  category,
  tickets,
}: CategoryTestPageProps) => {
  const copy = useCopy()
  return (
    <>
      <MetaTags
        title={copy.categoryPageMetaTagTitle({ category })}
        description={copy.categoryPageMetaTagDescription({ category })}
      />
      <WebsitePageContent>
        <CategoryTestProvider category={category} tickets={tickets}>
          <ClientOnly>
            <CategoryTestPageHeader category={category} />
            <CategoryTestContent />
          </ClientOnly>
        </CategoryTestProvider>
      </WebsitePageContent>
    </>
  )
}
