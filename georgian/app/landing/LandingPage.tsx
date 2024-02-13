import { Text } from '@lib/ui/text'
import { Button } from '@lib/ui/buttons/Button'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { ShyTextButton } from '@lib/ui/buttons/ShyTextButton'
import { Link } from '@georgian/languages-ui/components/Link'
import { VStack } from '@lib/ui/layout/Stack'
import { Center } from '@lib/ui/layout/Center'
import { useCopy } from '../copy/CopyProvider'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { getTicketCategoryPath } from '../navigation/utils'
import { creatorWebsiteUrl } from '../product/resources'

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
