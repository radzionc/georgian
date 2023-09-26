import { range } from '@georgian/utils/array/range'
import { SameWidthChildrenRow } from '@georgian/ui/ui/Layout/SameWidthChildrenRow'
import { Line } from '@georgian/ui/ui/Line'
import { useTheme } from 'styled-components'
import { ColorItem } from './ColorItem'
import { labelColorsCount } from '@georgian/ui/ui/colors/generateLabelColorGetter'

export const ColorList = () => {
  const {
    colors: { getLabelColor, ...hslaColors },
  } = useTheme()

  return (
    <SameWidthChildrenRow fullWidth gap={40} minChildrenWidth={240}>
      {Object.entries(hslaColors).map(([name, color]) => (
        <ColorItem color={color} name={name} key={name} />
      ))}
      <Line />
      {range(labelColorsCount)
        .map(getLabelColor)
        .map((color, index) => (
          <ColorItem color={color} name={`Label #${index + 1}`} key={index} />
        ))}
    </SameWidthChildrenRow>
  )
}
