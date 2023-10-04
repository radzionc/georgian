import {
  ComponentWithOptionalChildrenProps,
  TitledComponentProps,
} from '@georgian/ui/props'
import { HStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'

interface WebsitePageHeaderProps
  extends ComponentWithOptionalChildrenProps,
    TitledComponentProps {}

export const WebsitePageHeader = ({
  title,
  children,
}: WebsitePageHeaderProps) => {
  return (
    <HStack
      alignItems="center"
      wrap="wrap"
      gap={20}
      justifyContent="space-between"
    >
      <Text color="contrast" as="h1" size={20}>
        {title}
      </Text>
      {children}
    </HStack>
  )
}
