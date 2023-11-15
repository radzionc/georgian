import { getWebsitePageLayout } from 'layout/makeWebsitePage'
import { TicketsCategoryPage } from 'tickets/components/TicketsCategoryPage'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'

export default TicketsCategoryPage

TicketsCategoryPage.getLayout = getWebsitePageLayout

export { getStaticPaths, getStaticProps }
