import { LocalizedPageProps } from 'copy/LocalizedPageProps'

import { getStaticPaths, getStaticProps } from 'navigation/pages/categoryPage'
import {
  CategoryTestPage,
  CategoryTestPageProps,
} from 'tickets/components/CategoryTestPage'
import { PageContainer } from 'components/PageContainer'

export default ({
  language,
  ...rest
}: LocalizedPageProps & CategoryTestPageProps) => (
  <PageContainer language={language}>
    <CategoryTestPage {...rest} />
  </PageContainer>
)

export { getStaticPaths, getStaticProps }
