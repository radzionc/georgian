import { DemoPage } from 'components/DemoPage'
import { range } from '@georgian/utils/array/range'
import { VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { IntersectionAware } from '@georgian/ui/ui/IntersectionAware'
import { ImageHolder } from '@georgian/ui/ui/images/ImageHolder'
import { SafeImage } from '@georgian/ui/ui/SafeImage'
import { CoverImage } from '@georgian/ui/ui/images/CoverImage'
import { SameWidthChildrenRow } from '@georgian/ui/ui/Layout/SameWidthChildrenRow'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="vGJcbhz9uKY" title="Images">
      <SameWidthChildrenRow fullWidth minChildrenWidth={300} gap={40}>
        {range(50).map((index) => (
          <VStack alignItems="center" key={index} gap={8}>
            <Text color="supporting" weight="bold" size={20}>
              Image #{index + 1}
            </Text>
            <IntersectionAware<HTMLDivElement>
              render={({ ref, wasIntersected }) => (
                <ImageHolder ref={ref} width={240} height={360}>
                  {wasIntersected && (
                    <SafeImage
                      src={`https://picsum.photos/id/${index}/240/360`}
                      render={(props) => <CoverImage {...props} />}
                    />
                  )}
                </ImageHolder>
              )}
            />
          </VStack>
        ))}
      </SameWidthChildrenRow>
    </DemoPage>
  )
})
