import { TicketCategory, ticketCategoryEmoji } from '@georgian/entities/Ticket'
import { Text } from '@georgian/ui/ui/Text'
import { Page } from 'layout/Page'
import { TicketItem } from './TicketItem'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import { useQueryParamState } from 'navigation/hooks/useQueryParamState'
import { toBatches } from '@georgian/utils/array/toBatches'
import { ExhaustiveNavigation } from 'navigation/components/ExhaustiveNavigation'
import { MinimalisticFooterPagination } from 'navigation/components/MinimalisticFooterPagination'
import { useRef } from 'react'
import { useEffectOnDependencyChange } from '@georgian/ui/hooks/useEffectOnDependencyChange'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { getCategoryTestPagePath } from 'navigation/utils'
import { WebsitePageContent } from 'layout/components/WebsitePageContent'
import { WebsitePageHeader } from 'layout/components/WebsitePageHeader'
import { TranslatedPageProps } from 'copy/TranslatedPageProps'
import { useCopy } from 'copy/CopyProvider'
import { MetaTags } from '@georgian/ui/metadata/MetaTags'
import { Link } from 'navigation/components/Link'

export interface TicketsCategoryPageProps extends TranslatedPageProps {
  category: TicketCategory
  tickets: TranslatedTicket[]
}

const batchSize = 20

export const TicketsCategoryPage: Page<TicketsCategoryPageProps> = ({
  category,
  tickets,
}) => {
  const copy = useCopy()

  const [ticket, setTicket] = useQueryParamState<number>('ticket', 1)

  const batches = toBatches(tickets, batchSize)
  const pageCount = Math.ceil(tickets.length / batchSize)
  const currentBatchIndex = Math.floor(ticket / batchSize)
  const currentBatch = batches[currentBatchIndex]

  const navigationRef = useRef<HTMLDivElement>(null)
  useEffectOnDependencyChange(() => {
    if (navigationRef.current) {
      navigationRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentBatchIndex])

  return (
    <>
      <MetaTags
        title={copy.categoryTestPageMetaTagTitle({ category })}
        description={copy.categoryTestPageMetaTagDescription({ category })}
      />
      <WebsitePageContent>
        <WebsitePageHeader
          title={
            <>
              <Text as="span" style={{ marginRight: 8 }}>
                {ticketCategoryEmoji[category]}
              </Text>
              {copy.categoryPageTitle({ category: copy[category] })}
            </>
          }
        >
          <Link href={getCategoryTestPagePath(category)}>
            <Button as="div">{copy.startTest}</Button>
          </Link>
        </WebsitePageHeader>
        <div ref={navigationRef}>
          <ExhaustiveNavigation
            itemsCount={pageCount}
            renderItem={(pageNumber) => {
              const start = pageNumber * batchSize + 1
              const end = Math.min(start + batchSize - 1, tickets.length)

              if (end === start) {
                return start
              }

              return `${start}-${end}`
            }}
            value={currentBatchIndex}
            onChange={(page) => setTicket(page * batchSize + 1)}
          />
        </div>
        {currentBatch.map((ticket) => (
          <TicketItem ticket={ticket} key={ticket.ticketNumber} />
        ))}
        <MinimalisticFooterPagination
          itemsCount={pageCount}
          value={currentBatchIndex}
          onChange={(page) => setTicket(page * batchSize + 1)}
        />
      </WebsitePageContent>
    </>
  )
}
