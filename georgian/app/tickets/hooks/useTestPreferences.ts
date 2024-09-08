import { TicketCategory } from '@georgian/entities/Ticket'
import {
  PersistentStateKey,
  usePersistentState,
} from '../../state/persistentState'

export const testPreferences = ['all', 'completed'] as const
export type TestPreference = (typeof testPreferences)[number]

type TestPreferences = Record<TicketCategory, TestPreference>

export const useTestPreferences = () => {
  return usePersistentState<TestPreferences>(
    PersistentStateKey.TestPreferences,
    {
      language: 'all',
      law: 'all',
      history: 'all',
    },
  )
}
