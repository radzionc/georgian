import { ComponentWithChildrenProps, TitledComponentProps } from '@lib/ui/props'
import { HStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'

interface WebsitePageHeaderProps
  extends Partial<ComponentWithChildrenProps>,
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
