import { syncTextsForTranslation } from '../utils/syncTextsForTranslation'
import { syncTranslations } from '../utils/syncTranslations'

const sync = async () => {
  await syncTextsForTranslation()
  await syncTranslations('en')
  await syncTranslations('ru')
}

sync()
