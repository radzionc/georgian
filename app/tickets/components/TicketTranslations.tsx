import { VStack } from '@georgian/ui/layout/Stack'
import { TranslatedTicket } from '@georgian/entities/TranslatedTicket'

import { SeparatedByLine } from '@georgian/ui/layout/SeparatedByLine'
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
          original={question}
          translation={translation[question]}
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
              translation={answerTranslation}
            />
          )
        })}
      </VStack>
    </SeparatedByLine>
  )
}
