import { ComponentWithChildrenProps } from '@lib/ui/props'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import styled from 'styled-components'
import { WebsiteNavigation } from '@lib/ui/website/navigation/WebsiteNavigation'
import { TranslatedPageLink } from '@georgian/languages-ui/components/TranslatedPageLink'
import { interactive } from '@lib/ui/css/interactive'
import { ProductLogo } from '../../product/ProductLogo'
import { ticketCategories } from '@georgian/entities/Ticket'
import {
  curatedQuestionsPagePath,
  getTicketCategoryPath,
  privacyPolicyPagePath,
  termsOfServicePagePath,
} from '../../navigation/utils'
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
import Link from 'next/link'
import { SignInButton } from './SignInButton'
import { MatchAuthStatus } from '../../auth/components/MatchAuthStatus'
import { Path } from '../../navigation/Path'

const LogoWrapper = styled(TranslatedPageLink)`
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
  const { language } = useLanguage()

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
              <TranslatedPageLink
                key={category}
                href={getTicketCategoryPath(category)}
              >
                <Button as="div" size="s" kind="ghost">
                  {copy[category]}
                </Button>
              </TranslatedPageLink>
            ))}
            <TranslatedPageLink key="interview" href={curatedQuestionsPagePath}>
              <Button as="div" size="s" kind="ghost">
                {copy.interview}
              </Button>
            </TranslatedPageLink>
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
            <VStack style={{ minWidth: 98 }} alignItems="end">
              <MatchAuthStatus
                authenticated={() => (
                  <TranslatedPageLink href={Path.Account}>
                    <Button as="div" size="s" kind="ghost">
                      {copy.account}
                    </Button>
                  </TranslatedPageLink>
                )}
                unauthenticated={() => <SignInButton />}
              />
            </VStack>
          </HStack>
        </>
      )}
      renderOverlayItems={({ onClose }) => (
        <>
          {ticketCategories.map((category) => (
            <TranslatedPageLink
              key={category}
              onClick={onClose}
              href={getTicketCategoryPath(category)}
            >
              <OverlayNavigationItem as="div">
                {copy[category]}
              </OverlayNavigationItem>
            </TranslatedPageLink>
          ))}
          <TranslatedPageLink key="interview" href={curatedQuestionsPagePath}>
            <OverlayNavigationItem as="div">
              {copy.interview}
            </OverlayNavigationItem>
          </TranslatedPageLink>
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

          <OverlayNavigationItem as="div">
            <MatchAuthStatus
              authenticated={() => (
                <TranslatedPageLink href={Path.Account}>
                  {copy.account}
                </TranslatedPageLink>
              )}
              unauthenticated={() => <SignInButton />}
            />
          </OverlayNavigationItem>
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
              <InteractiveText>{copy.getInTouch}</InteractiveText>
            </ExternalLink>
            <Link href={privacyPolicyPagePath}>
              <InteractiveText>{copy.privacy}</InteractiveText>
            </Link>
            <Link href={termsOfServicePagePath}>
              <InteractiveText>{copy.terms}</InteractiveText>
            </Link>
          </HStack>
        </Footer>
      }
    >
      <Content>{children}</Content>
    </WebsiteNavigation>
  )
}
