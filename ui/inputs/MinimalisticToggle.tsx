import { InputProps, LabeledComponentProps } from '../props'
import { verticalPadding } from '../css/verticalPadding'
import styled from 'styled-components'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { centerContent } from '../css/centerContent'
import { round } from '../css/round'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { HStack } from '../layout/Stack'
import { getColor } from '../theme/getters'
import { Text } from '../text'

const CheckContainer = styled.div`
  ${round};
  border: 2px solid ${getColor('textShy')};
  ${sameDimensions(20)};
  padding: 1px;
  ${centerContent}
  ${transition};
`

const Container = styled(UnstyledButton)`
  ${transition};
  ${verticalPadding(4)}
  &:hover {
    color: ${getColor('contrast')};
  }

  &:hover ${CheckContainer} {
    background: ${getColor('mist')};
  }
`

const Check = styled.div`
  ${round};
  background: ${getColor('primary')};
  ${sameDimensions('100%')};
  ${centerContent}
`

type MinimalisticToggleProps = InputProps<boolean> & LabeledComponentProps

export const MinimalisticToggle = ({
  value,
  onChange,
  label,
}: MinimalisticToggleProps) => {
  return (
    <Container onClick={() => onChange(!value)}>
      <HStack alignItems="center" gap={8}>
        <CheckContainer>{value && <Check />}</CheckContainer>
        <Text size={14} weight="semibold" as="div">
          {label}
        </Text>
      </HStack>
    </Container>
  )
}
