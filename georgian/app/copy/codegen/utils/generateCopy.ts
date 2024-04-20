import path from 'path'
import { extractTemplateVariables } from '@lib/utils/template/extractTemplateVariables'
import { Language } from '@georgian/languages/Language'
import { getCopySource } from './getCopySource'
import { makeRecord } from '@lib/utils/record/makeRecord'
import { toRecordTypeBody } from '@lib/codegen/utils/ts/toRecordTypeBody'
import { createTsFile } from '@lib/codegen/utils/createTsFile'

export const generateCopy = (language: Language) => {
  const copy = getCopySource(language)

  const copyCode = toRecordTypeBody(
    makeRecord(Object.keys(copy), (key) => {
      const value = copy[key]
      const variables = extractTemplateVariables(value)
      if (variables.length === 0) {
        return `\`${value}\``
      }

      return `<R>(variables: {${variables
        .map((variable) => `${variable}: any`)
        .join(', ')}}, inject: Injector<R>) => inject(\`${value}\`, variables)`
    }),
  )

  const content = [
    `import { Copy } from './Copy'`,
    `import { Injector } from '@lib/utils/template/Injector'`,

    `const ${language}Copy: Copy = ${copyCode}`,
    `export default ${language}Copy`,
  ].join('\n\n')

  return createTsFile({
    fileName: language,
    directory: path.resolve(__dirname, '../../'),
    content,
    generatedBy: 'app/copy/codegen/utils/generateCopy.ts',
  })
}
