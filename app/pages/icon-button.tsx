import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { DemoPage } from 'components/DemoPage'
import { TitledSection } from '@georgian/ui/ui/Layout/TitledSection'
import {
  IconButton,
  iconButtonKinds,
  iconButtonSizes,
} from '@georgian/ui/ui/buttons/IconButton'
import { SettingsIcon } from '@georgian/ui/ui/icons/SettingsIcon'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  const icon = <SettingsIcon />
  return (
    <DemoPage title="Icon Button" youtubeVideoId="zliCty-G8nA">
      <VStack gap={40}>
        <TitledSection title="Button kinds">
          <HStack gap={40} wrap="wrap">
            {iconButtonKinds.map((kind) => (
              <IconButton title="Settings" icon={icon} key={kind} kind={kind} />
            ))}
          </HStack>
        </TitledSection>
        <TitledSection title="Button sizes">
          <HStack alignItems="center" gap={20} wrap="wrap">
            {iconButtonSizes.map((size) => (
              <IconButton title="Settings" icon={icon} key={size} size={size} />
            ))}
          </HStack>
        </TitledSection>
      </VStack>
    </DemoPage>
  )
})
