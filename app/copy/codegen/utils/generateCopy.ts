import { createTsFile } from '@georgian/codegen/utils/createTsFile'
import path from 'path'
import { toRecordTypeBody } from '@georgian/codegen/utils/ts/toRecordTypeBody'
import { makeRecord } from '@georgian/utils/makeRecord'
import { extractTemplateVariables } from '@georgian/utils/template/extractTemplateVariables'
import { Language } from '@georgian/languages/Language'
import { getCopySource } from './getCopySource'

export const generateCopy = (language: Language) => {
  const copy = getCopySource(language)

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
    `import { injectVariables } from '@georgian/utils/template/injectVariables'`,

    `export const ${language}Copy: Copy = ${copyCode}`,
  ].join('\n\n')

  return createTsFile({
    fileName: language,
    directory: path.resolve(__dirname, '../../'),
    content,
    generatedBy: 'app/copy/codegen/utils/generateCopy.ts',
  })
}
