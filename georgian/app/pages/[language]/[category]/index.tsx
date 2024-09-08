import { PageContainer } from '../../../components/PageContainer'
import { LocalizedPageProps } from '../../../copy/LocalizedPageProps'
import {
  getStaticPaths,
  getStaticProps,
} from '../../../navigation/pages/categoryPage'
import {
  TicketsCategoryPageProps,
  TicketsCategoryPage,
} from '../../../tickets/components/TicketsCategoryPage'

export default ({
  language,
  ...rest
}: LocalizedPageProps & TicketsCategoryPageProps) => (
  <PageContainer isTranslated={true} language={language}>
    <TicketsCategoryPage {...rest} />
  </PageContainer>
)

export { getStaticPaths, getStaticProps }
