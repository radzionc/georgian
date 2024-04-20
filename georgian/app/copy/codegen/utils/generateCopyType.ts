import path from 'path'
import { extractTemplateVariables } from '@lib/utils/template/extractTemplateVariables'
import { createTsFile } from '@lib/codegen/utils/createTsFile'
import { toRecordTypeBody } from '@lib/codegen/utils/ts/toRecordTypeBody'
import { makeRecord } from '@lib/utils/record/makeRecord'

export const generateCopyType = async (copy: Record<string, string>) => {
  const type = toRecordTypeBody(
    makeRecord(Object.keys(copy), (key) => {
      const value = copy[key]
      const variables = extractTemplateVariables(value)
      if (variables.length === 0) {
        return 'string'
      }

      return `<R>(variables: {${variables
        .map((variable) => `${variable}: any`)
        .join(', ')}}, inject: Injector<R>) => R`
    }),
  )
  const content = [
    `import { Injector } from '@lib/utils/template/Injector'`,
    `export type Copy = ${type}`,
  ].join('\n\n')

  return createTsFile({
    fileName: 'Copy',
    directory: path.resolve(__dirname, '../../'),
    content,
    generatedBy: 'app/copy/codegen/utils/generateCopyType.ts',
  })
}
