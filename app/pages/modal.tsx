import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { Modal } from '@georgian/ui/ui/Modal'
import { Opener } from '@georgian/ui/ui/Opener'
import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { DemoPage } from 'components/DemoPage'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="v61B8aToxR0" title="Modal / Popup">
      <HStack fullWidth gap={40}>
        <Opener
          renderOpener={({ onOpen }) => (
            <Button onClick={onOpen}>Open Modal</Button>
          )}
          renderContent={({ onClose }) => (
            <Modal
              title="Get More Freedom"
              onClose={onClose}
              width={400}
              renderContent={() => (
                <VStack gap={20}>
                  <Text>
                    👨‍💻 No distractions, only deep work and quality breaks.
                  </Text>
                  <Text>💪 Build good habits. Break bad ones.</Text>
                  <Text>
                    😌 Efficiency over long hours. More time for life!
                  </Text>
                  <Text>☀️ Start work early. Enjoy the evening!</Text>
                  <ExternalLink to="https://increaser.org">
                    <Button>Start now</Button>
                  </ExternalLink>
                </VStack>
              )}
            />
          )}
        />
      </HStack>
    </DemoPage>
  )
})
