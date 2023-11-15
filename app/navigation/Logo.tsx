import { Path } from './Path'
import { ProductLogo } from 'product/ProductLogo'
import { Link } from './components/Link'

export const Logo = () => {
  return (
    <Link href={Path.Home}>
      <ProductLogo />
    </Link>
  )
}
