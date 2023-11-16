import { getValueProviderSetup } from '@georgian/ui/state/getValueProviderSetup'
import { Copy } from './Copy'

export const { useValue: useCopy, provider: CopyProvider } =
  getValueProviderSetup<Copy>('Copy')
