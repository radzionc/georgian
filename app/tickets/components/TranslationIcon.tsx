import { IconWrapper } from '@georgian/ui/icons/IconWrapper'
import styled, { useTheme } from 'styled-components'
import { Match } from '@georgian/ui/base/Match'
import { QuestionIcon } from '@georgian/ui/icons/QuestionIcon'
import { ArrowRightIcon } from '@georgian/ui/icons/ArrowRightIcon'
import { CheckCircleIcon } from '@georgian/ui/icons/CheckCircleIcon'
import { CloseIcon } from '@georgian/ui/icons/CloseIcon'
import { match } from '@georgian/utils/match'

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
