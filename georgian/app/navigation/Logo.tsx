import { ProductLogo } from '../product/ProductLogo'
import { Link } from '@georgian/languages-ui/components/Link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <ProductLogo />
    </Link>
  )
}
