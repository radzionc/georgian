import { Language } from '@georgian/internalization/Language'
import { toBatches } from '@georgian/utils/array/toBatches'
import { TranslationServiceClient } from '@google-cloud/translate'

const projectId = process.env.GOOGLE_TRANSLATE_PROJECT_ID
const batchSize = 600

export const translateTexts = async (
  texts: string[],
  from: Language,
  to: Language,
): Promise<string[]> => {
  if (texts.length === 0) {
    return []
  }

  const translationClient = new TranslationServiceClient()

  const batches = toBatches(texts, batchSize)

  const result = []
  for (const batch of batches) {
    const request = {
      parent: `projects/${projectId}/locations/global`,
      contents: batch,
      mimeType: 'text/plain',
      sourceLanguageCode: from,
      targetLanguageCode: to,
    }

    const [{ translations }] = await translationClient.translateText(request)
    if (!translations) {
      throw new Error('No translations')
    }

    result.push(
      ...translations.map((translation) => translation.translatedText || ''),
    )
  }

  return result
}
