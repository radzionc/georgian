import { ComponentWithChildrenProps } from '@lib/ui/props'
import { HStack } from '@lib/ui/layout/Stack'
import styled from 'styled-components'
import { WebsiteNavigation } from '@lib/ui/website/navigation/WebsiteNavigation'
import { Link } from '@georgian/languages-ui/components/Link'
import { interactive } from '@lib/ui/css/interactive'
import { ProductLogo } from '../../product/ProductLogo'
import { ticketCategories } from '@georgian/entities/Ticket'
import { getTicketCategoryPath } from '../../navigation/utils'
import { Button } from '@lib/ui/buttons/Button'
import { LanguageSelector } from '@georgian/languages-ui/components/LanguageSelector'
import { OverlayNavigationItem } from '@lib/ui/website/navigation/OverlayNavigationItem'
import { Footer } from '@lib/ui/website/navigation/Footer'
import { Text } from '@lib/ui/text'
import { useCopy } from '../../copy/CopyProvider'
import { legalEntity, supportEmail } from '@georgian/config'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { InteractiveText } from '@lib/ui/text/InteractiveText'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import CountryFlag from '@lib/ui/countries/flags/CountryFlag'
import { useLanguage } from '@georgian/languages-ui/components/LanguageProvider'
import {
  languageNativeName,
  languagePrimaryCountry,
} from '@georgian/languages/Language'

const LogoWrapper = styled(Link)`
  ${interactive};
  font-size: 20px;
`

const Content = styled.div`
  flex: 1;
  padding: 40px 20px;
  height: 100%;
`

const FlagWrapper = styled(IconWrapper)`
  border-radius: 2px;
  font-size: 18px;
`

export const WebsiteLayout = ({ children }: ComponentWithChildrenProps) => {
  const copy = useCopy()
  const [language] = useLanguage()

  return (
    <WebsiteNavigation
      logo={
        <LogoWrapper href="/">
          <ProductLogo />
        </LogoWrapper>
      }
      renderTopbarItems={() => (
        <>
          <div />
          <HStack gap={4} alignItems="center">
            {ticketCategories.map((category) => (
              <Link key={category} href={getTicketCategoryPath(category)}>
                <Button size="s" key={category} kind="ghost">
                  {copy[category]}
                </Button>
              </Link>
            ))}
            <LanguageSelector
              renderOpener={({ props }) => (
                <div {...props}>
                  <Button size="s" kind="ghost">
                    <HStack alignItems="center" gap={8}>
                      <FlagWrapper>
                        <CountryFlag code={languagePrimaryCountry[language]} />
                      </FlagWrapper>
                      <Text size={12} weight="semibold" height="small">
                        {language.toUpperCase()}
                      </Text>
                    </HStack>
                  </Button>
                </div>
              )}
            />
          </HStack>
        </>
      )}
      renderOverlayItems={({ onClose }) => (
        <>
          {ticketCategories.map((category) => (
            <Link
              key={category}
              onClick={onClose}
              href={getTicketCategoryPath(category)}
            >
              <OverlayNavigationItem as="div">
                {copy[category]}
              </OverlayNavigationItem>
            </Link>
          ))}
          <LanguageSelector
            renderOpener={({ props }) => (
              <div {...props}>
                <OverlayNavigationItem as="div">
                  <HStack alignItems="center" gap={8}>
                    <FlagWrapper>
                      <CountryFlag code={languagePrimaryCountry[language]} />
                    </FlagWrapper>
                    {languageNativeName[language]}
                  </HStack>
                </OverlayNavigationItem>
              </div>
            )}
          />
        </>
      )}
      footer={
        <Footer>
          <HStack
            alignItems="center"
            justifyContent="center"
            gap={16}
            fullWidth
            wrap="wrap"
          >
            <Text>
              © {new Date().getFullYear()} {legalEntity}
            </Text>
            <ExternalLink to={`mailto:${supportEmail}`}>
              <InteractiveText>Get in touch</InteractiveText>
            </ExternalLink>
          </HStack>
        </Footer>
      }
    >
      <Content>{children}</Content>
    </WebsiteNavigation>
  )
}
