import { ComponentWithChildrenProps } from '@lib/ui/props'
import { VStack } from '@lib/ui/layout/Stack'
import styled from 'styled-components'
import { WebsiteHeader } from './WebsiteHeader'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'

const Container = styled(VStack)`
  height: 100%;
`

const Content = styled.div`
  flex: 1;
  padding-top: 40px;
  padding-bottom: 120px;
  ${horizontalPadding(20)};
  height: 100%;
  overflow-y: auto;
`

export const WebsiteLayout = ({ children }: ComponentWithChildrenProps) => {
  return (
    <Container>
      <WebsiteHeader />
      <Content>{children}</Content>
    </Container>
  )
}
