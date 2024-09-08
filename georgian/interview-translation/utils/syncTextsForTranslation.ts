import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'
import fs from 'fs'
import { textsFilePath } from './sources'
import { interviewQuestions } from '../../data/sources/interviewQuestions'

export const syncTextsForTranslation = async () => {
  const texts = withoutDuplicates(
    interviewQuestions.map(({ question }) => question),
  )

  fs.writeFileSync(textsFilePath, texts.join('\n\n'))
}
