import { ComponentWithChildrenProps } from '@lib/ui/props'
import { VStack } from '@lib/ui/layout/Stack'

type WebsitePageContentProps = ComponentWithChildrenProps & {
  maxWidth?: number
}

export const WebsitePageContent = ({
  children,
  maxWidth = 640,
}: WebsitePageContentProps) => {
  return (
    <VStack alignItems="center" fullWidth>
      <VStack style={{ maxWidth }} fullWidth gap={40}>
        {children}
      </VStack>
    </VStack>
  )
}
