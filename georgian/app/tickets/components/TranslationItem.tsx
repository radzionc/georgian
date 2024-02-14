import { TicketHighlight } from '@georgian/entities/Ticket'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'
import { extractSegments } from '@georgian/entities-utils/ticket/extractSegments'

type TranslationItemProps = {
  original: string
  originalHighlights?: TicketHighlight[]
  translation: string
  icon: ReactNode
}

export const TranslationItem = ({
  original,
  translation,
  icon,
  originalHighlights = [],
}: TranslationItemProps) => {
  const originalSegments = extractSegments({
    content: original,
    highlights: originalHighlights,
  })

  return (
    <HStack gap={8} fullWidth>
      {icon}
      <VStack gap={4}>
        <Text size={16} weight="semibold" color="contrast">
          {originalSegments.map((segment, index) => (
            <Text
              as="span"
              key={index}
              color={segment.isHighlighted ? 'success' : undefined}
              style={
                index < originalSegments.length - 1
                  ? { marginRight: 4 }
                  : undefined
              }
            >
              {segment.content}
            </Text>
          ))}
        </Text>
        <Text size={16} weight="semibold" color="supporting">
          {translation}
        </Text>
      </VStack>
    </HStack>
  )
}
