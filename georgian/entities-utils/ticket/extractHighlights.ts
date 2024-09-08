import { EntityWithHighlights } from '@georgian/entities/Ticket'
import { extractSegments } from './extractSegments'

export function extractHighlights(entity: EntityWithHighlights): string[] {
  return extractSegments(entity)
    .filter((segment) => segment.isHighlighted)
    .map((segment) => segment.content)
}
