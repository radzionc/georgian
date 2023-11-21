import { Text } from '@georgian/ui/text'
import { Button } from '@georgian/ui/buttons/Button'
import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { creatorWebsiteUrl } from 'product/resources'
import { ShyTextButton } from '@georgian/ui/buttons/ShyTextButton'
import { getTicketCategoryPath } from 'navigation/utils'
import { Link } from '@georgian/languages-ui/components/Link'
import { useCopy } from 'copy/CopyProvider'
import { VStack } from '@georgian/ui/layout/Stack'
import { Center } from '@georgian/ui/layout/Center'
import { PageMetaTags } from '@georgian/ui/metadata/PageMetaTags'

export const LandingPage = () => {
  const copy = useCopy()
  return (
    <Center>
      <PageMetaTags
        title={copy.homePageMetaTagTitle}
        description={copy.homePageMetaTagDescription}
        image="images/banner.png"
      />
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
  )
}
