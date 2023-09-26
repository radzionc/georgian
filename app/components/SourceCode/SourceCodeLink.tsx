import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { GitHubIcon } from '@georgian/ui/ui/icons/GitHubIcon'
import { HStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'

interface Props {
  to: string
}

export const SourceCodeLink = ({ to }: Props) => {
  return (
    <ExternalLink to={to}>
      <Button as="div" kind="ghostSecondary">
        <HStack alignItems="center" gap={6}>
          <GitHubIcon />
          <Text>source code</Text>
        </HStack>
      </Button>
    </ExternalLink>
  )
}
