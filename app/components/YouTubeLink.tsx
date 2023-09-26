import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { YouTubeIcon } from '@georgian/ui/ui/icons/YouTubeIcon'
import { HStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'

interface Props {
  videoId: string
}

export const YouTubeLink = ({ videoId }: Props) => {
  return (
    <ExternalLink to={`https://youtu.be/${videoId}`}>
      <Button kind="ghostSecondary">
        <HStack alignItems="center" gap={6}>
          <YouTubeIcon />
          <Text>watch on YouTube</Text>
        </HStack>
      </Button>
    </ExternalLink>
  )
}
