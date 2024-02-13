import { getAllTicketsInCategory } from '@georgian/db/tickets'
import { TicketCategory, ticketCategories } from '@georgian/entities/Ticket'
import { Language, languages } from '@georgian/languages/Language'
import { toTranslatedTickets } from '@georgian/tickets-translation/utils/toTranslatedTickets'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { LocalizedPageProps } from '../../copy/LocalizedPageProps'
import { CategoryTestPageProps } from '../../tickets/components/CategoryTestPage'

interface Params extends ParsedUrlQuery {
  category: TicketCategory
  language: Language
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = ticketCategories.flatMap((category) =>
    languages.map((language) => ({
      params: { category, language },
    })),
  )

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<
  CategoryTestPageProps & LocalizedPageProps,
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
      tickets: toTranslatedTickets(tickets, params.language),
      language: params.language,
    },
  }
}
