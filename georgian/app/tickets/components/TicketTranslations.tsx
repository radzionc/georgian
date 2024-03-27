import { VStack } from '@lib/ui/layout/Stack'
import { EnhancedTicket } from '@georgian/entities/EnhancedTicket'

import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'
import { TranslationItem } from './TranslationItem'
import { TranslationIcon } from './TranslationIcon'
import { promptPlaceholder } from '@georgian/tickets-translation/utils/getTextsForTranslation'
import { extractHighlights } from '@georgian/entities-utils/ticket/extractHighlights'
import { NonEmptyOnly } from '@lib/ui/base/NonEmptyOnly'
import { Text } from '@lib/ui/text'

interface TicketItemProps {
  ticket: EnhancedTicket
  falseAnswer?: number
}

export const TicketTranslations = ({ ticket }: TicketItemProps) => {
  const { translation, prompt, question, answers } = ticket

  const highlights = [question, ...answers].flatMap((entity) =>
    extractHighlights(entity),
  )

  return (
    <SeparatedByLine gap={16}>
      <VStack gap={8}>
        <TranslationItem
          icon={<TranslationIcon value="question" />}
          original={question.content}
          originalHighlights={question.highlights}
          translation={translation[question.content]}
        />
        {prompt && translation[prompt] && (
          <TranslationItem
            icon={<TranslationIcon value="prompt" />}
            original={prompt}
            translation={translation[prompt]}
          />
        )}
      </VStack>
      <VStack gap={8}>
        {answers.map((answer) => {
          const original = prompt?.includes(promptPlaceholder)
            ? prompt.replace(promptPlaceholder, answer.content)
            : answer.content
          const answerTranslation = translation[original]
          if (!answerTranslation) return null

          return (
            <TranslationItem
              key={answer.content}
              icon={
                <TranslationIcon
                  value={answer.isCorrect ? 'correctAnswer' : 'falseAnswer'}
                />
              }
              original={original}
              originalHighlights={answer.highlights}
              translation={answerTranslation}
            />
          )
        })}
      </VStack>
      <NonEmptyOnly
        array={highlights}
        render={(highlights) => (
          <VStack gap={8}>
            {highlights.map((highlight) => (
              <TranslationItem
                key={highlight}
                original={highlight}
                icon={<Text color="contrast">✨</Text>}
                translation={translation[highlight]}
              />
            ))}
          </VStack>
        )}
      />
    </SeparatedByLine>
  )
}
