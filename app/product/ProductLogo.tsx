import { Text } from '@georgian/ui/ui/Text'
import { ProductIcon } from './ProductIcon'
import { HStack } from '@georgian/ui/ui/Stack'
import styled from 'styled-components'
import { getColor } from '@georgian/ui/ui/theme/getters'
import { centerContent } from '@georgian/ui/css/centerContent'

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
      <Text size={16} color="contrast" weight="semibold">
        Georgian
      </Text>
    </HStack>
  )
}
