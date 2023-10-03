import { TemporaryStorage } from '@georgian/ui/state/TemporaryStorage'
import { LocalStorage } from '@georgian/ui/state/LocalStorage'
import { createPersistentStateHook } from '@georgian/ui/state/createPersistentStateHook'
import { createPersistentStateManager } from '@georgian/ui/state/createPersistentStateManager'

export enum PersistentStateKey {
  ThemePreference = 'themePreference',
  CompleteTickets = 'completeTickets',
}

const persistentStorage =
  typeof window !== 'undefined'
    ? new LocalStorage<PersistentStateKey>()
    : new TemporaryStorage<PersistentStateKey>()

export const usePersistentState =
  createPersistentStateHook<PersistentStateKey>(persistentStorage)

export const managePersistentState =
  createPersistentStateManager<PersistentStateKey>(persistentStorage)
