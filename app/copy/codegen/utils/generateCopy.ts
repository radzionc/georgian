import { TargetLanguage } from '@georgian/translation/Language'
import { getTransaltions } from './getTranslations'
import { createTsFile } from '@georgian/codegen/utils/createTsFile'
import path from 'path'
import { toRecordTypeBody } from '@georgian/codegen/utils/ts/toRecordTypeBody'
import { makeRecord } from '@georgian/utils/makeRecord'
import { extractTemplateVariables } from '@georgian/utils/extractTemplateVariables'

export const generateCopy = (language: TargetLanguage) => {
  const copy = getTransaltions(language)

  const copyCode = toRecordTypeBody(
    makeRecord(Object.keys(copy), (key) => {
      const value = copy[key]
      const variables = extractTemplateVariables(value)
      if (variables.length === 0) {
        return `\`${value}\``
      }

      return `(variables: {${variables
        .map((variable) => `${variable}: string`)
        .join(', ')}}) => injectVariables(\`${value}\`, variables)`
    }),
  )

  const content = [
    `import { Copy } from './Copy'`,
    `import { injectVariables } from '@georgian/utils/injectVariables'`,

    `export const ${language}Copy: Copy = ${copyCode}`,
  ].join('\n')

  return createTsFile({
    fileName: language,
    directory: path.resolve(__dirname, '../../'),
    content,
    generatedBy: 'app/copy/codegen/utils/generateCopy.ts',
  })
}
