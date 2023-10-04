import { ComponentWithChildrenProps } from '@georgian/ui/props'
import { VStack } from '@georgian/ui/ui/Stack'

export const WebsitePageContent = ({
  children,
}: ComponentWithChildrenProps) => {
  return (
    <VStack alignItems="center" fullWidth>
      <VStack style={{ maxWidth: 640 }} fullWidth gap={40}>
        {children}
      </VStack>
    </VStack>
  )
}
