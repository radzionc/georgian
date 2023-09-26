import { DemoPage } from 'components/DemoPage'
import { ConfirmationModal } from '@georgian/ui/ui/Modal/ConfirmationModal'
import { Opener } from '@georgian/ui/ui/Opener'
import { VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { ShyTextButton } from '@georgian/ui/ui/buttons/ShyTextButton'
import { IconButton } from '@georgian/ui/ui/buttons/IconButton'
import { TrashBinIcon } from '@georgian/ui/ui/icons/TrashBinIcon'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Confirmation Modal" youtubeVideoId="S_i04MKYfxk">
      <Opener
        renderOpener={({ onOpen }) => (
          <IconButton
            title="Delete"
            kind="alert"
            icon={<TrashBinIcon />}
            onClick={onOpen}
          />
        )}
        renderContent={({ onClose }) => (
          <ConfirmationModal
            title="Delete project"
            onClose={onClose}
            confirmActionText="Delete"
            onConfirm={() => {
              console.log('Delete project')
            }}
            renderContent={() => (
              <VStack gap={12}>
                <Text color="supporting">
                  Are you sure you want to delete{' '}
                  <Text as="span" color="regular">
                    Job?
                  </Text>{' '}
                  This action will remove all the analytics related to the
                  project.
                </Text>
                <Text color="supporting">
                  To keep the data but hide the project from other parts of the
                  app -{' '}
                  <ShyTextButton
                    onClick={() => {
                      console.log('Make project inactive')
                      onClose()
                    }}
                    text="make it inactive."
                  />
                </Text>
              </VStack>
            )}
          />
        )}
      />
    </DemoPage>
  )
})
