import { HStack, VStack } from '@georgian/ui/layout/Stack'
import { Text } from '@georgian/ui/text'
import { ReactNode } from 'react'

type TranslationItemProps = {
  original: ReactNode
  translation: ReactNode
  icon: ReactNode
}

export const TranslationItem = ({
  original,
  translation,
  icon,
}: TranslationItemProps) => {
  return (
    <HStack gap={8} fullWidth>
      {icon}
      <VStack>
        <Text as="div" size={16} weight="semibold" color="contrast">
          {original}
        </Text>
        <Text as="div" size={16} weight="semibold" color="supporting">
          {translation}
        </Text>
      </VStack>
    </HStack>
  )
}
