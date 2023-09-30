import { getAllTickets } from '@georgian/db/tickets'
import { getTextsForTranslation } from './utils/getTextsForTranslation'
import { withoutDuplicates } from '@georgian/utils/array/withoutDuplicates'
import fs from 'fs'
import { textsFilePath } from './utils/sources'

const extractTextsForTranslation = async () => {
  const tickets = await getAllTickets()

  const texts = withoutDuplicates(tickets.map(getTextsForTranslation).flat())

  fs.writeFileSync(textsFilePath, texts.join('\n\n'))
}

extractTextsForTranslation()
