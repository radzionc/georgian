import { VStack } from '@lib/ui/layout/Stack'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'

import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'
import { TranslationItem } from './TranslationItem'
import { TranslationIcon } from './TranslationIcon'
import { promptPlaceholder } from '@georgian/tickets-translation/utils/getTextsForTranslation'

interface TicketItemProps {
  ticket: TranslatedTicket
  falseAnswer?: number
}

export const TicketTranslations = ({ ticket }: TicketItemProps) => {
  const { translation, prompt, question, answers } = ticket

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
    </SeparatedByLine>
  )
}
