import path from 'path'
import { languages } from '@georgian/languages/Language'
import { createTsFile } from '@lib/codegen/utils/createTsFile'

export const generateGetCopy = async () => {
  const imports = [
    `import { Language } from '@georgian/languages/Language'`,
    ...languages.map((language) => `import ${language} from './${language}'`),
  ].join('\n')

  const copyRecord = `const copy = {${languages.join(', ')}} as const`

  const getCopy = `export const getCopy = (language: Language) => copy[language]`

  return createTsFile({
    fileName: 'getCopy',
    directory: path.resolve(__dirname, '../../'),
    content: [imports, copyRecord, getCopy].join('\n\n'),
    generatedBy: 'app/copy/codegen/utils/generateGetCopy.ts',
  })
}
