import 'styled-components'

import { Theme } from '@georgian/ui/theme/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
