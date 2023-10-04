import { TicketCategory, ticketCategories } from '@georgian/entities/Ticket'
import { makeWebsitePage } from 'layout/makeWebsitePage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getAllTicketsInCategory } from '@georgian/db/tickets'
import {
  CategoryTestPage,
  CategoryTestPageProps,
} from 'tickets/components/CategoryTestPage'
import { toTranslatedTickets } from '@georgian/tickets-translation/utils/toTranslatedTickets'

export default makeWebsitePage<CategoryTestPageProps>(CategoryTestPage)

interface Params extends ParsedUrlQuery {
  category: TicketCategory
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = ticketCategories.map((category) => ({
    params: { category },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<
  CategoryTestPageProps,
  Params
> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const tickets = await getAllTicketsInCategory(params.category)

  return {
    props: {
      category: params.category,
      tickets: toTranslatedTickets(tickets),
    },
  }
}
