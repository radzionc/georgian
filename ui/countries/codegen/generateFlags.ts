import { CountryCode, countryCodes } from '@georgian/utils/countries'
import { makeRecord } from '@georgian/utils/makeRecord'
import fs from 'fs'
import path from 'path'
import { capitalizeFirstLetter } from '@georgian/utils/capitalizeFirstLetter'
import { createTsFile } from '@georgian/codegen/utils/createTsFile'
import { svgToReact } from '../../codegen/svgToReact'

const getSvgFlagPath = (code: CountryCode) =>
  path.resolve(__dirname, './flags', `${code.toLowerCase()}.svg`)

const flagsPath = path.resolve(__dirname, '../flags')

const getFlagComponentName = (code: CountryCode) =>
  `${capitalizeFirstLetter(code.toLowerCase())}Flag`

const generateFlags = async () => {
  const svgRecord = makeRecord(countryCodes, (code) =>
    fs.readFileSync(getSvgFlagPath(code), 'utf8'),
  )

  const generatedBy = '@georgian/ui/country/codegen/generateFlags.ts'

  await Promise.all(
    countryCodes.map(async (code) => {
      const svg = svgRecord[code]
      const content = await svgToReact({
        svg,
        componentName: getFlagComponentName(code),
      })

      return createTsFile({
        extension: 'tsx',
        directory: flagsPath,
        fileName: getFlagComponentName(code as CountryCode),
        content,
        generatedBy,
      })
    }),
  )

  const imports = [
    `import dynamic from 'next/dynamic'`,
    `import { SvgIconProps } from '../../icons/SvgIconProps'`,
    `import { ComponentType } from 'react'`,
    `import { CountryCode } from '@georgian/utils/countries'`,
    `import { CountryFlagDynamicFallback, CountryFlagFallbackPropsProvider } from '../CountryFlagDynamicFallback'`,
  ].join('\n')

  const countryFlagComponentRecord = makeRecord(countryCodes, (code) => {
    const componentName = getFlagComponentName(code)
    return `dynamic(() => import('./${componentName}'), { ssr: false, loading: () => <CountryFlagDynamicFallback /> })`
  })

  const content = [
    imports,
    `const countryFlagRecord: Record<CountryCode, ComponentType<SvgIconProps>> = {
      ${Object.entries(countryFlagComponentRecord)
        .map(([key, value]) => {
          return `${key}: ${value}`
        })
        .join(',')}
    }`,
    `interface CountryFlagProps extends SvgIconProps { code: CountryCode }`,
    `export const CountryFlag = (props: CountryFlagProps) => {
      const Component = countryFlagRecord[props.code]
      return (
        <CountryFlagFallbackPropsProvider value={props}>
          <Component {...props} />
        </CountryFlagFallbackPropsProvider>
      )
    }`,
    `export default CountryFlag`,
  ].join('\n\n')

  await createTsFile({
    extension: 'tsx',
    directory: flagsPath,
    fileName: 'CountryFlag',
    content,
    generatedBy,
  })
}

generateFlags()
