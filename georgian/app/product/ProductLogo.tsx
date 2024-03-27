import { Text } from '@lib/ui/text'
import { ProductIcon } from './ProductIcon'
import { HStack } from '@lib/ui/layout/Stack'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { centerContent } from '@lib/ui/css/centerContent'

const IconWrapper = styled.div`
  color: ${getColor('contrast')};
  font-size: 22px;
  ${centerContent};
`

export const ProductLogo = () => {
  return (
    <HStack alignItems="center" gap={8}>
      <IconWrapper>
        <ProductIcon />
      </IconWrapper>
      <Text size={16} color="contrast" weight="bold">
        <Text as="span" style={{ color: 'red' }}>
          Ge
        </Text>
        Citizen
      </Text>
    </HStack>
  )
}
