import { Button } from '@lib/ui/buttons/Button'
import { Center } from '@lib/ui/layout/Center'
import { useCopy } from '../copy/CopyProvider'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { WebsiteSliceContent } from '@lib/ui/website/WebsiteSliceContent'
import { WebsiteSectionHeader } from '@lib/ui/website/WebsiteSectionHeader'
import { Link } from '@georgian/languages-ui/components/Link'
import { getTicketCategoryPath } from '../navigation/utils'

export const LandingPage = () => {
  const copy = useCopy()
  return (
    <Center>
      <PageMetaTags
        title={copy.homePageMetaTagTitle}
        description={copy.homePageMetaTagDescription}
        image="images/banner.png"
      />
      <WebsiteSliceContent style={{ maxWidth: 480 }}>
        <WebsiteSectionHeader
          titleAs="h1"
          title={copy.homePageTitle}
          subtitle={copy.homePageSubTitle}
        />
        <Link href={getTicketCategoryPath('language')}>
          <Button kind="reversed" size="l">
            {copy.getStarted}
          </Button>
        </Link>
      </WebsiteSliceContent>
    </Center>
  )
}
