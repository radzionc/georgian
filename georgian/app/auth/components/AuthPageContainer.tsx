import { ComponentWithChildrenProps } from '@lib/ui/props'
import { PageContainer } from '../../components/PageContainer'
import { primaryLanguage } from '@georgian/languages/Language'
import { UnauthenticatedOnly } from './UnauthenticatedOnly'

export const AuthPageContainer = ({ children }: ComponentWithChildrenProps) => {
  return (
    <PageContainer isTranslated={false} language={primaryLanguage}>
      <UnauthenticatedOnly>{children}</UnauthenticatedOnly>
    </PageContainer>
  )
}
