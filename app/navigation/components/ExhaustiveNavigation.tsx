import { ReactNode } from 'react'
import { range } from '@georgian/utils/array/range'
import { HStack } from '@georgian/ui/ui/Stack'
import styled, { css } from 'styled-components'
import { InvisibleHTMLRadio } from '@georgian/ui/ui/inputs/InvisibleHTMLRadio'
import { interactive } from '@georgian/ui/css/interactive'
import { getColor } from '@georgian/ui/ui/theme/getters'
import { transition } from '@georgian/ui/css/transition'

interface ExhaustiveNavigationProps {
  itemsCount: number
  renderItem: (itemNumber: number) => ReactNode
  value: number
  onChange: (value: number) => void
}

const Option = styled.label<{ isSelected: boolean }>`
  padding: 12px 8px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  ${transition};
  ${interactive};
  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${getColor('contrast')};
        `
      : css`
          color: ${getColor('textShy')};
          :hover {
            color: ${getColor('text')};
            background: ${getColor('mist')};
          }
        `};
`

export const ExhaustiveNavigation = ({
  itemsCount,
  renderItem,
  value,
  onChange,
}: ExhaustiveNavigationProps) => {
  return (
    <HStack wrap="wrap">
      {range(itemsCount).map((itemNumber) => {
        const isSelected = itemNumber === value
        return (
          <Option isSelected={isSelected} key={itemNumber}>
            {renderItem(itemNumber)}
            <InvisibleHTMLRadio
              groupName="exhaustive-navigation"
              value={value}
              isSelected={isSelected}
              onSelect={() => onChange(itemNumber)}
            />
          </Option>
        )
      })}
    </HStack>
  )
}
