import { makeWebsitePage } from 'layout/makeWebsitePage'

import {
  CategoryTestPage,
  CategoryTestPageProps,
} from 'tickets/components/CategoryTestPage'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'

export default makeWebsitePage<CategoryTestPageProps>(CategoryTestPage)

export { getStaticPaths, getStaticProps }
