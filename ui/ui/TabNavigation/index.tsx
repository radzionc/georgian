import styled from 'styled-components'
import { TabNavigationItem } from './TabNavigationItem'
import { HStack } from '../Stack'
import { hideScrollbars } from '../../css/hideScrollbars'
import { UIComponentProps } from '../../props'

interface TabNavigationProps<T extends string | number | symbol>
  extends UIComponentProps {
  views: readonly T[]
  getViewName: (view: T) => string
  activeView: T
  onSelect: (option: T) => void
  groupName: string
  renderOption?: (option: T) => React.ReactNode
}

const Container = styled(HStack)`
  gap: 4px;
  position: relative;
  overflow-x: auto;
  ${hideScrollbars};
`

export function TabNavigation<T extends string | number | symbol>({
  views,
  getViewName,
  activeView,
  onSelect,
  groupName,
  renderOption = (option) => option.toString(),
  ...rest
}: TabNavigationProps<T>) {
  return (
    <Container {...rest}>
      {views.map((view) => {
        const name = getViewName(view)
        return (
          <TabNavigationItem
            groupName={groupName}
            isSelected={view === activeView}
            value={name}
            onSelect={() => onSelect(view)}
            key={name}
          >
            {renderOption(view)}
          </TabNavigationItem>
        )
      })}
    </Container>
  )
}
