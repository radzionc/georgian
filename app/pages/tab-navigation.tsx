import { DemoPage } from 'components/DemoPage'
import { useState } from 'react'
import { TabNavigation } from '@georgian/ui/ui/TabNavigation'
import { capitalizeFirstLetter } from '@georgian/utils/capitalizeFirstLetter'
import { VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { makeDemoPage } from 'layout/makeDemoPage'

const views = [
  'Overview',
  'Projects',
  'Habits',
  'Goals',
  'Tasks',
  'Settings',
  'Account',
  'Help',
] as const
type View = (typeof views)[number]

export default makeDemoPage(() => {
  const [activeView, setActiveView] = useState<View>('Overview')

  return (
    <DemoPage youtubeVideoId="dDuWfi_Hvis" title="Tab Navigation">
      <VStack fullWidth gap={40}>
        <TabNavigation
          views={views}
          getViewName={capitalizeFirstLetter}
          activeView={activeView}
          onSelect={setActiveView}
          groupName="tab-navigation"
        />

        <Text size={20} weight="bold">
          {activeView} view
        </Text>
      </VStack>
    </DemoPage>
  )
})
