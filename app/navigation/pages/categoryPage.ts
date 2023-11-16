import { getAllTicketsInCategory } from '@georgian/db/tickets'
import { TicketCategory, ticketCategories } from '@georgian/entities/Ticket'
import { TargetLanguage, targetLanguages } from '../../../translation/Language'
import { toTranslatedTickets } from '@georgian/tickets-translation/utils/toTranslatedTickets'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { CategoryTestPageProps } from 'tickets/components/CategoryTestPage'

interface Params extends ParsedUrlQuery {
  category: TicketCategory
  language: TargetLanguage
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = ticketCategories.flatMap((category) =>
    targetLanguages.map((language) => ({
      params: { category, language },
    })),
  )

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
      tickets: toTranslatedTickets(tickets, params.language),
    },
  }
}
