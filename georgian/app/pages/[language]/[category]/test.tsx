import { PageContainer } from '../../../components/PageContainer'
import { LocalizedPageProps } from '../../../copy/LocalizedPageProps'
import {
  getStaticPaths,
  getStaticProps,
} from '../../../navigation/pages/categoryPage'
import {
  CategoryTestPageProps,
  CategoryTestPage,
} from '../../../tickets/components/CategoryTestPage'

export default ({
  language,
  ...rest
}: LocalizedPageProps & CategoryTestPageProps) => (
  <PageContainer isTranslated={true} language={language}>
    <CategoryTestPage {...rest} />
  </PageContainer>
)

export { getStaticPaths, getStaticProps }
