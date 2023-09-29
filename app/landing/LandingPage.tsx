import { VStack } from '@georgian/ui/ui/Stack'
import { Center } from '@georgian/ui/ui/Center'
import { Text } from '@georgian/ui/ui/Text'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { creatorWebsiteUrl } from 'product/resources'
import { ShyTextButton } from '@georgian/ui/ui/buttons/ShyTextButton'
import { getTicketCategoryPath } from 'navigation/utils'
import Link from 'next/link'

export const LandingPage = () => {
  return (
    <Center>
      <VStack style={{ maxWidth: 480 }} alignItems="center" gap={24}>
        <Text color="contrast" as="h1" centered size={32}>
          Master Your Georgian Citizenship Exam with Confidence!
        </Text>
        <Link href={getTicketCategoryPath('language')}>
          <Button kind="reversed" size="l">
            Get Started
          </Button>
        </Link>
        <Text>
          Created by{' '}
          <ExternalLink to={creatorWebsiteUrl}>
            <ShyTextButton text="Radzion" />
          </ExternalLink>
        </Text>
      </VStack>
    </Center>
  )
}
