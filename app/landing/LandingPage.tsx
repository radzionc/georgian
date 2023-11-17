import { VStack } from '@georgian/ui/ui/Stack'
import { Center } from '@georgian/ui/ui/Center'
import { Text } from '@georgian/ui/ui/Text'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { creatorWebsiteUrl } from 'product/resources'
import { ShyTextButton } from '@georgian/ui/ui/buttons/ShyTextButton'
import { getTicketCategoryPath } from 'navigation/utils'
import { Link } from 'navigation/components/Link'
import { useCopy } from 'copy/CopyProvider'
import { MetaTags } from '@georgian/ui/metadata/MetaTags'

export const LandingPage = () => {
  const copy = useCopy()
  return (
    <>
      <MetaTags
        title={copy.homePageMetaTagTitle}
        description={copy.homePageMetaTagDescription}
      />
      <Center>
        <VStack style={{ maxWidth: 480 }} alignItems="center" gap={24}>
          <Text height="large" color="contrast" as="h1" centered size={32}>
            {copy.homePageTitle}
          </Text>
          <Link href={getTicketCategoryPath('language')}>
            <Button kind="reversed" size="l">
              {copy.getStarted}
            </Button>
          </Link>
          <Text>
            {copy.createdBy}{' '}
            <ExternalLink to={creatorWebsiteUrl}>
              <ShyTextButton text="Radzion" />
            </ExternalLink>
          </Text>
        </VStack>
      </Center>
    </>
  )
}
