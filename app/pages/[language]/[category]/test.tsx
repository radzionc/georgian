import { CategoryTestPage } from 'tickets/components/CategoryTestPage'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'
import { withTranslation } from 'copy/withTranlation'
import { withWebsiteLayout } from 'layout/withWebsiteLayout'

export default withTranslation(withWebsiteLayout(CategoryTestPage))

export { getStaticPaths, getStaticProps }
