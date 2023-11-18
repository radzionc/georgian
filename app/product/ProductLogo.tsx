import { Text } from '@georgian/ui/text'
import { ProductIcon } from './ProductIcon'
import { HStack } from '@georgian/ui/layout/Stack'
import styled from 'styled-components'
import { getColor } from '@georgian/ui/theme/getters'
import { centerContent } from '@georgian/ui/css/centerContent'
import { useCopy } from 'copy/CopyProvider'

const IconWrapper = styled.div`
  color: ${getColor('contrast')};
  font-size: 22px;
  ${centerContent};
`

export const ProductLogo = () => {
  const copy = useCopy()
  return (
    <HStack alignItems="center" gap={8}>
      <IconWrapper>
        <ProductIcon />
      </IconWrapper>
      <Text size={16} color="contrast" weight="semibold">
        {copy.georgian}
      </Text>
    </HStack>
  )
}
