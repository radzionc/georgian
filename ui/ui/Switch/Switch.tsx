import styled, { useTheme } from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { CheckIcon } from '../icons/CheckIcon'
import { CloseIcon } from '../icons/CloseIcon'
import { HStack } from '../Stack'
import { Text } from '../Text'
import { toSizeUnit } from '../../css/toSizeUnit'
import { getColor } from '../theme/getters'
import { centerContent } from '../../css/centerContent'
import { sameDimensions } from '../../css/sameDimensions'
import { round } from '../../css/round'

interface SwitchProps {
  value: boolean
  onChange: (value: boolean) => void
  label?: string
}

const height = 28
const width = height * 1.58
const spacing = 2
const controlSize = height - spacing * 2

const Control = styled.div`
  ${sameDimensions(controlSize)};

  ${round};
  ${defaultTransitionCSS};

  ${centerContent};
  color: ${getColor('background')};
  background: ${getColor('text')};
  font-size: 14px;
`

const Wrapper = styled(HStack)`
  cursor: pointer;
  user-select: none;

  color: ${getColor('textSupporting')};

  ${defaultTransitionCSS};

  :hover {
    color: ${getColor('text')};
  }

  :hover ${Control} {
    transform: scale(1.08);
  }
`

const Container = styled.div`
  width: ${toSizeUnit(width)};
  height: ${toSizeUnit(height)};

  display: flex;
  align-items: center;

  ${round};
  ${defaultTransitionCSS};
`

export const Switch = ({ value, onChange, label }: SwitchProps) => {
  const { colors } = useTheme()
  return (
    <Wrapper
      onClick={() => onChange(!value)}
      as="label"
      alignItems="center"
      gap={8}
      id={label}
    >
      <Container
        style={{
          background: (value ? colors.mistExtra : colors.mist).toCssValue(),
        }}
      >
        <Control
          style={{
            marginLeft: value ? width - controlSize - spacing : spacing,
          }}
        >
          {value ? <CheckIcon /> : <CloseIcon />}
        </Control>
      </Container>
      {label && <Text>{label}</Text>}
    </Wrapper>
  )
}
