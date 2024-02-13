import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import styled, { useTheme } from 'styled-components'
import { Match } from '@lib/ui/base/Match'
import { QuestionIcon } from '@lib/ui/icons/QuestionIcon'
import { ArrowRightIcon } from '@lib/ui/icons/ArrowRightIcon'
import { CheckCircleIcon } from '@lib/ui/icons/CheckCircleIcon'
import { CloseIcon } from '@lib/ui/icons/CloseIcon'
import { match } from '@lib/utils/match'

type TranslationType = 'question' | 'prompt' | 'correctAnswer' | 'falseAnswer'

type TranslationOriginalProps = {
  value: TranslationType
}

const IconContainer = styled(IconWrapper)`
  font-size: 16px;
  margin-top: 2px;
`

export const TranslationIcon = ({ value }: TranslationOriginalProps) => {
  const { colors } = useTheme()

  return (
    <IconContainer
      style={{
        color: match(value, {
          question: () => colors.textShy,
          prompt: () => colors.textShy,
          correctAnswer: () => colors.success,
          falseAnswer: () => colors.alert,
        }).toCssValue(),
      }}
    >
      <Match
        value={value}
        question={() => <QuestionIcon />}
        prompt={() => <ArrowRightIcon />}
        correctAnswer={() => <CheckCircleIcon />}
        falseAnswer={() => <CloseIcon />}
      />
    </IconContainer>
  )
}
