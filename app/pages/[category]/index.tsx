import { TicketCategory, ticketCategories } from '@georgian/entities/Ticket'
import { getWebsitePageLayout } from 'layout/makeWebsitePage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import {
  TicketsCategoryPage,
  TicketsCategoryPageProps,
} from 'tickets/components/TicketsCategoryPage'
import { getAllTicketsInCategory } from '@georgian/db/tickets'

export default TicketsCategoryPage

TicketsCategoryPage.getLayout = getWebsitePageLayout

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
  TicketsCategoryPageProps,
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
      tickets,
    },
  }
}
