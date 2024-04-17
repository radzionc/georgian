import { ComponentWithChildrenProps } from '@lib/ui/props'
import { PageContainer } from '../../components/PageContainer'
import { primaryLanguage } from '@georgian/languages/Language'
import { UnauthenticatedOnly } from './UnauthenticatedOnly'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { takeWholeSpace } from '@lib/ui/css/takeWholeSpace'
import { VStack } from '@lib/ui/layout/Stack'
import { Panel } from '@lib/ui/panel/Panel'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'

const Container = styled(VStack)`
  align-items: center;
  justify-content: center;
  ${takeWholeSpace};

  @media (max-width: 600px) {
    justify-content: start;
    padding-top: 60px;
  }
`

const Content = styled(Panel)`
  max-width: 400px;
  width: 100%;
  padding: 26px;
  ${borderRadius.m};

  @media (max-width: 600px) {
    border: none;
  }
`

export const AuthPageContainer = ({ children }: ComponentWithChildrenProps) => {
  return (
    <PageContainer isTranslated={false} language={primaryLanguage}>
      <UnauthenticatedOnly>
        <Container>
          <Content kind="secondary">{children}</Content>
        </Container>
      </UnauthenticatedOnly>
    </PageContainer>
  )
}
