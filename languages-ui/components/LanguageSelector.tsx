import { Menu } from '@georgian/ui/Menu'
import { useLanguage } from './LanguageProvider'
import styled from 'styled-components'
import { IconWrapper } from '@georgian/ui/icons/IconWrapper'
import { HStack } from '@georgian/ui/layout/Stack'
import { MenuOptionProps, MenuOption } from '@georgian/ui/menu/MenuOption'
import {
  languageNativeName,
  languagePrimaryCountry,
  languages,
} from '@georgian/languages/Language'
import CountryFlag from '@georgian/ui/countries/flags/CountryFlag'
import { Text } from '@georgian/ui/text'
import { Button } from '@georgian/ui/buttons/Button'

const FlagWrapper = styled(IconWrapper)`
  border-radius: 2px;
`

export const LanguageSelector = () => {
  const [language, setLanguage] = useLanguage()

  return (
    <Menu
      title="Select language"
      renderOpener={({ ref, ...props }) => (
        <div ref={ref} {...props}>
          <Button size="s" kind="ghost">
            <HStack alignItems="center" gap={8}>
              <FlagWrapper>
                <CountryFlag code={languagePrimaryCountry[language]} />
              </FlagWrapper>
              <Text color="shy" height="small">
                {language}
              </Text>
            </HStack>
          </Button>
        </div>
      )}
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
