import {
  EntityWithHighlights,
  EntityWithHighlightsSegment,
} from '@georgian/entities/Ticket'

export function extractSegments(
  entity: EntityWithHighlights,
): EntityWithHighlightsSegment[] {
  const segments: EntityWithHighlightsSegment[] = []
  const { content, highlights = [] } = entity

  if (highlights.length === 0) {
    segments.push({ content, isHighlighted: false })
    return segments
  }

  let currentIndex = 0
  for (const highlight of highlights) {
    if (highlight.start > currentIndex) {
      segments.push({
        content: content.substring(currentIndex, highlight.start),
        isHighlighted: false,
      })
    }

    segments.push({
      content: content.substring(highlight.start, highlight.end),
      isHighlighted: true,
    })

    currentIndex = highlight.end
  }

  if (currentIndex < content.length) {
    segments.push({
      content: content.substring(currentIndex),
      isHighlighted: false,
    })
  }

  return segments
}
