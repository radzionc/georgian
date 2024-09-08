import { getAllTickets } from '@georgian/db/tickets'
import { getTextsForTranslation } from './getTextsForTranslation'
import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'
import fs from 'fs'
import { textsFilePath } from './sources'

export const syncTextsForTranslation = async () => {
  const tickets = await getAllTickets()

  const texts = withoutDuplicates(tickets.map(getTextsForTranslation).flat())

  fs.writeFileSync(textsFilePath, texts.join('\n\n'))
}
