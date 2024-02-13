import { Menu } from '@lib/ui/Menu'
import { useLanguage } from './LanguageProvider'
import styled from 'styled-components'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { MenuOptionProps, MenuOption } from '@lib/ui/menu/MenuOption'
import {
  languageNativeName,
  languagePrimaryCountry,
  languages,
} from '@georgian/languages/Language'
import CountryFlag from '@lib/ui/countries/flags/CountryFlag'
import { ReactNode } from 'react'

const FlagWrapper = styled(IconWrapper)`
  border-radius: 2px;
  font-size: 18px;
`

type RenderOpenerParams = {
  props: Record<string, unknown>
}

type LanguageSelectorProps = {
  renderOpener: (params: RenderOpenerParams) => ReactNode
}

export const LanguageSelector = ({ renderOpener }: LanguageSelectorProps) => {
  const [language, setLanguage] = useLanguage()

  return (
    <Menu
      title="Select language"
      renderOpener={({ ref, ...props }) =>
        renderOpener({ props: { ref, ...props } })
      }
      renderContent={({ view, onClose }) => {
        const options: MenuOptionProps[] = languages.map((option) => ({
          icon: (
            <FlagWrapper>
              <CountryFlag code={languagePrimaryCountry[option]} />
            </FlagWrapper>
          ),
          text: languageNativeName[option],
          onSelect: () => {
            if (language !== option) {
              setLanguage(option)
            }
            onClose()
          },
        }))

        return options.map((props, index) => (
          <MenuOption view={view} key={index} {...props} />
        ))
      }}
    />
  )
}
