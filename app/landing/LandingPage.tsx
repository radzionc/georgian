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
import Head from 'next/head'
import { getMetaTags } from '@georgian/ui/metadata/getMetaTags'

export const LandingPage = () => {
  const copy = useCopy()
  return (
    <>
      <Head>
        {getMetaTags({
          title: copy.homePageMetaTagTitle,
          description: copy.homePageMetaTagDescription,
        })}
      </Head>
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
