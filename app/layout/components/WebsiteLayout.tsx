import { ComponentWithChildrenProps } from '@georgian/ui/props'
import { VStack } from '@georgian/ui/ui/Stack'
import styled from 'styled-components'
import { WebsiteHeader } from './WebsiteHeader'

const Container = styled(VStack)`
  height: 100%;
`

const Content = styled.div`
  flex: 1;
  padding-top: 80px;
  padding-bottom: 160px;
`

export const WebsiteLayout = ({ children }: ComponentWithChildrenProps) => {
  return (
    <Container>
      <WebsiteHeader />
      <Content>{children}</Content>
    </Container>
  )
}
