import { TicketsCategoryPage } from 'tickets/components/TicketsCategoryPage'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'
import { withTranslation } from 'copy/withTranlation'
import { withWebsiteLayout } from 'layout/withWebsiteLayout'

export default withTranslation(withWebsiteLayout(TicketsCategoryPage))

export { getStaticPaths, getStaticProps }
