import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { Copy } from './Copy'

export const { useValue: useCopy, provider: CopyProvider } =
  getValueProviderSetup<Copy>('Copy')
