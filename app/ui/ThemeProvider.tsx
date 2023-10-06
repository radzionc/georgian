import { ComponentWithChildrenProps } from '@georgian/ui/props'
import { PrefferedThemeProvider } from '@georgian/ui/ui/theme/PrefferedThemeProvider'
import { ThemePreference } from '@georgian/ui/ui/theme/ThemePreference'
import { PersistentStateKey, usePersistentState } from 'state/persistentState'

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [prefferedTheme, setPrefferedTheme] =
    usePersistentState<ThemePreference>(
      PersistentStateKey.ThemePreference,
      'dark',
      // 'system',
    )

  return (
    <PrefferedThemeProvider
      prefferedTheme={prefferedTheme}
      setPrefferedTheme={setPrefferedTheme}
    >
      {children}
    </PrefferedThemeProvider>
  )
}
