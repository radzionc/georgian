import { defaultBorderRadiusCSS } from '@georgian/ui/ui/borderRadius'
import { HSLA } from '@georgian/ui/ui/colors/HSLA'
import { HStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { sameDimensions } from '@georgian/ui/css/sameDimensions'
import styled from 'styled-components'

interface Props {
  color: HSLA
  name: string
}

const Color = styled.div`
  ${sameDimensions(32)};
  ${defaultBorderRadiusCSS};
`

export const ColorItem = ({ color, name }: Props) => {
  return (
    <HStack alignItems="center" gap={8}>
      <Color style={{ background: color.toCssValue() }} />
      <Text color="supporting" weight="bold">
        {name}
      </Text>
    </HStack>
  )
}
