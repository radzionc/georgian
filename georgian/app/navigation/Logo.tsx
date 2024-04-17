import { TranslatedPageLink } from '@georgian/languages-ui/components/TranslatedPageLink'
import { ProductLogo } from '../product/ProductLogo'

export const Logo = () => {
  return (
    <TranslatedPageLink href={'/'}>
      <ProductLogo />
    </TranslatedPageLink>
  )
}
