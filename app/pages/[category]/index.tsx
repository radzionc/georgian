import { TicketCategory, ticketCategories } from '@georgian/entities/Ticket'
import { getWebsitePageLayout } from 'layout/makeWebsitePage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import {
  TicketsCategoryPage,
  TicketsCategoryPageProps,
} from 'tickets/components/TicketsCategoryPage'
import { getAllTicketsInCategory } from '@georgian/db/tickets'
import { TranslationRecord } from '@georgian/internalization/TranslationRecord'
import { getTextsForTranslation } from '@georgian/tickets-translation/utils/getTextsForTranslation'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'
import englishTranslation from '@georgian/tickets-translation/sources/en.json'

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

  const translations = englishTranslation as TranslationRecord

  const tickets = await getAllTicketsInCategory(params.category)

  const translatedTickets: TranslatedTicket[] = tickets.map((ticket) => {
    const textsToTranslate = getTextsForTranslation(ticket)
    const translation: TranslationRecord = {}
    textsToTranslate.map((text) => {
      translation[text] = translations[text]
    })

    return {
      ...ticket,
      translation,
    }
  })

  return {
    props: {
      category: params.category,
      tickets: translatedTickets,
    },
  }
}
