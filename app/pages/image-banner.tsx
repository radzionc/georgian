import { DemoPage } from 'components/DemoPage'
import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { ThemeProvider } from 'styled-components'
import { HSLA } from '@georgian/ui/ui/colors/HSLA'
import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { ImageBanner } from '@georgian/ui/ui/ImageBanner'
import { SafeImage } from '@georgian/ui/ui/SafeImage'
import { YouTubeIcon } from '@georgian/ui/ui/icons/YouTubeIcon'
import { CoverImage } from '@georgian/ui/ui/images/CoverImage'
import { darkTheme } from '@georgian/ui/ui/theme/darkTheme'
import { PersistentStateKey, usePersistentState } from 'state/persistentState'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { Text } from '@georgian/ui/ui/Text'
import { makeDemoPage } from 'layout/makeDemoPage'

const titleColor = new HSLA(220, 45, 30)

const HABITS_EDUCATION_URL = `https://youtu.be/39gE4G1j-yk`

export default makeDemoPage(() => {
  const [interactionDate, setInteractionDate] = usePersistentState<
    number | undefined
  >(PersistentStateKey.HabitsEducationWasAt, undefined)

  const handleInteraction = () => {
    setInteractionDate(Date.now())
  }

  return (
    <DemoPage title="Image Banner" youtubeVideoId="BcQ05BR5Pgw">
      <VStack fullWidth gap={40}>
        <ThemeProvider theme={darkTheme}>
          <ImageBanner
            onClose={handleInteraction}
            action={
              <Button size="xl" kind="reversed" as="div">
                <HStack alignItems="center" gap={8}>
                  <YouTubeIcon />
                  <Text>Watch now</Text>
                </HStack>
              </Button>
            }
            title={
              <Text as="span" style={{ color: titleColor.toCssValue() }}>
                learn to build better habits
              </Text>
            }
            renderInteractiveArea={(props) => (
              <ExternalLink
                onClick={handleInteraction}
                to={HABITS_EDUCATION_URL}
                {...props}
              />
            )}
            image={
              <SafeImage
                src="images/mountains.webp"
                render={(props) => <CoverImage {...props} />}
              />
            }
          />
        </ThemeProvider>

        <Text>
          Last interaction:{' '}
          {interactionDate ? new Date(interactionDate).toUTCString() : '-'}
        </Text>
      </VStack>
    </DemoPage>
  )
})
