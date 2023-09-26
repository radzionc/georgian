import { SourceCodeLink } from 'components/SourceCode/SourceCodeLink'
import { RegularPage } from '@georgian/ui/ui/page/RegularPage'
import { HStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { YouTubeLink } from 'components/YouTubeLink'
import { ComponentWithChildrenProps } from '@georgian/ui/props'

interface Props extends ComponentWithChildrenProps {
  title: string
  seoTitle?: string
  seoDescription?: string
  youtubeVideoId?: string
}

export const DemoPage = ({
  title,
  seoTitle = title,
  seoDescription,
  youtubeVideoId,
  children,
}: Props) => {
  const { pathname } = useRouter()
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text as="h1" weight="bold" size={24} color="regular">
            {title}
          </Text>
          <SourceCodeLink
            to={`https://github.com/radzionc/georgian/blob/main/app/pages${pathname}.tsx`}
          />
          {youtubeVideoId && <YouTubeLink videoId={youtubeVideoId} />}
        </HStack>
      }
    >
      <Head>
        <title>{seoTitle}</title>
        {seoDescription && (
          <meta name="description" content={seoDescription} key="desc" />
        )}
      </Head>
      {children}
    </RegularPage>
  )
}
