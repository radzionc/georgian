import { LocalizedPageProps } from 'copy/LocalizedPageProps'
import {
  TicketsCategoryPageProps,
  TicketsCategoryPage,
} from 'tickets/components/TicketsCategoryPage'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'
import { PageContainer } from 'components/PageContainer'

export default ({
  language,
  ...rest
}: LocalizedPageProps & TicketsCategoryPageProps) => (
  <PageContainer language={language}>
    <TicketsCategoryPage {...rest} />
  </PageContainer>
)

export { getStaticPaths, getStaticProps }
