import { createTsFile } from '@georgian/codegen/utils/createTsFile'
import { makeRecord } from '@georgian/utils/makeRecord'
import path from 'path'
import { withoutDuplicates } from '@georgian/utils/array/withoutDuplicates'
import { toRecordTypeBody } from '@georgian/codegen/utils/ts/toRecordTypeBody'

const extractTemplateVariables = (str: string): string[] => {
  const variableRegex = /\{\{(\w+)\}\}/g
  const matches = str.match(variableRegex)
  if (!matches) return []

  return withoutDuplicates(matches.map((match) => match.slice(2, -2)))
}

export const generateCopyType = async (copy: Record<string, string>) => {
  const type = toRecordTypeBody(
    makeRecord(Object.keys(copy), (key) => {
      const value = copy[key]
      const variables = extractTemplateVariables(value)
      if (variables.length === 0) {
        return 'string'
      }

      return `(variables: {${variables
        .map((variable) => `${variable}: string`)
        .join(', ')}}) => string`
    }),
  )
  const content = `export type Copy = ${type}`

  return createTsFile({
    fileName: 'Copy',
    directory: path.resolve(__dirname, '../../'),
    content,
    generatedBy: 'app/copy/codegen/utils/generateCopyType.ts',
  })
}
