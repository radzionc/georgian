import { ProductLogo } from '../product/ProductLogo'
import { Path } from './Path'
import { Link } from '@georgian/languages-ui/components/Link'

export const Logo = () => {
  return (
    <Link href={Path.Home}>
      <ProductLogo />
    </Link>
  )
}
