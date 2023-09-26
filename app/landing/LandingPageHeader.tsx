import { HStack } from '@reactkit/ui/ui/Stack'
import { ProductLogo } from 'product/ProductLogo'
import styled from 'styled-components'
import { PrimaryActions } from './PrimaryActions'
import { verticalPadding } from '@reactkit/ui/css/verticalPadding'

const Container = styled.div`
  ${verticalPadding(20)};
  display: grid;
  --column-gap: 20px;
  grid-template-columns: 1fr min(1140px, 100% - calc(var(--column-gap) * 2)) 1fr;
  grid-column-gap: var(--column-gap);
  > * {
    grid-column: 2;
  }
`

export const LandingPageHeader = () => {
  return (
    <Container>
      <HStack alignItems="center" justifyContent="space-between">
        <ProductLogo />
        <PrimaryActions />
      </HStack>
    </Container>
  )
}
