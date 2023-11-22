import { createTsFile } from '@georgian/codegen/utils/createTsFile'
import { lightTheme } from '@georgian/ui/theme/lightTheme'
import { withoutDuplicates } from '@georgian/utils/array/withoutDuplicates'
import path from 'path'
import fs from 'fs'
import { generateImages } from 'pwa-asset-generator'
import { darkTheme } from '@georgian/ui/theme/darkTheme'

const codeDirectory = path.resolve(__dirname, '../')

const lightModeIconPath = path.resolve(codeDirectory, 'light-mode-icon.svg')
const darkModeIconPath = path.resolve(codeDirectory, 'dark-mode-icon.svg')
const publicDirectory = path.resolve(__dirname, '../../public')
const iconImagesLocation = 'images/icon'
const imagesOutputDirectory = path.resolve(publicDirectory, iconImagesLocation)
const manifestPath = path.resolve(publicDirectory, 'manifest.json')

const generateIconMetaTags = async () => {
  const promises = [
    generateImages(lightModeIconPath, imagesOutputDirectory, {
      manifest: manifestPath,
      opaque: false,
      iconOnly: true,
      favicon: true,
      type: 'png',
      pathOverride: iconImagesLocation,
    }),
    generateImages(lightModeIconPath, imagesOutputDirectory, {
      manifest: manifestPath,
      background: lightTheme.colors.background.toCssValue(),
      iconOnly: true,
      pathOverride: iconImagesLocation,
    }),
    generateImages(lightModeIconPath, imagesOutputDirectory, {
      manifest: manifestPath,
      background: lightTheme.colors.background.toCssValue(),
      splashOnly: true,
      pathOverride: iconImagesLocation,
    }),
  ]
  if (fs.existsSync(darkModeIconPath)) {
    promises.push(
      generateImages(darkModeIconPath, imagesOutputDirectory, {
        manifest: manifestPath,
        background: darkTheme.colors.background.toCssValue(),
        splashOnly: true,
        darkMode: true,
        pathOverride: iconImagesLocation,
      }),
    )
  }

  const results = await Promise.all(promises)

  const metaTags = results
    .flatMap((r) => withoutDuplicates(Object.values(r.htmlMeta)))
    .join('')
    .replace(/>/g, '/>')

  const content = `export const IconMetaTags = () => <>${metaTags}</>`

  createTsFile({
    extension: 'tsx',
    directory: codeDirectory,
    fileName: 'IconMetaTags',
    content,
    generatedBy: 'icon/codegen/generateIconMetaTags.ts',
  })
}

generateIconMetaTags()
