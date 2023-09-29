import { HStack } from '@georgian/ui/ui/Stack'
import { ProductLogo } from 'product/ProductLogo'
import styled from 'styled-components'
import { PrimaryActions } from './PrimaryActions'
import { verticalPadding } from '@georgian/ui/css/verticalPadding'
import Link from 'next/link'

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

export const WebsiteHeader = () => {
  return (
    <Container>
      <HStack alignItems="center" justifyContent="space-between">
        <Link href="/">
          <ProductLogo />
        </Link>
        <PrimaryActions />
      </HStack>
    </Container>
  )
}
