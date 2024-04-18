import { legalEntity, productName, supportEmail } from '@georgian/config'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { LegalPageContent } from '@lib/ui/website/legal/LegalPageContent'
import { LegalPageSection } from '@lib/ui/website/legal/LegalPageSection'
import { PageContainer } from '../components/PageContainer'
import { primaryLanguage } from '@georgian/languages/Language'

const name = 'Terms of service'

const content = {
  Introduction: (
    <>
      Welcome to {productName}! These Terms of Service ("Terms") govern your use
      of our website and services ("Service") provided by {legalEntity}. By
      accessing or using the Service, you agree to be bound by these Terms. If
      you disagree with any part of the terms, then you may not access the
      Service.
    </>
  ),
  'Use of the Service': (
    <>
      <p>
        {productName} is designed to help individuals prepare for the Georgian
        citizenship exam and interview. The Service provides study materials,
        exam simulation, and interview preparation resources.
      </p>
      <p>
        By using the Service, you agree to use it only for lawful purposes and
        in a way that does not infringe the rights of, restrict or inhibit
        anyone else's use and enjoyment of the Service.
      </p>
    </>
  ),
  'User Accounts': (
    <>
      To access certain features of the Service, you may be required to create
      an account. You agree to provide accurate and complete information when
      creating an account and to keep this information up to date. You are
      responsible for maintaining the confidentiality of your account and
      password and for restricting access to your computer or device.
    </>
  ),
  'Intellectual Property': (
    <>
      The Service and its original content, features, and functionality are and
      will remain the exclusive property of {legalEntity} and its licensors. The
      Service is protected by copyright, trademark, and other laws of both
      Georgia and foreign countries.
    </>
  ),
  Termination: (
    <>
      We may terminate or suspend your access to our Service immediately,
      without prior notice or liability, for any reason whatsoever, including
      without limitation if you breach the Terms. Upon termination, your right
      to use the Service will immediately cease.
    </>
  ),
  'Limitation of Liability': (
    <>
      In no event shall {legalEntity}, nor its directors, employees, partners,
      agents, suppliers, or affiliates, be liable for any indirect, incidental,
      special, consequential or punitive damages, including without limitation,
      loss of profits, data, use, goodwill, or other intangible losses,
      resulting from your access to or use of or inability to access or use the
      Service.
    </>
  ),
  'Governing Law': (
    <>
      These Terms shall be governed and construed in accordance with the laws of
      Georgia, without regard to its conflict of law provisions.
    </>
  ),
  'Changes to the Terms': (
    <>
      We reserve the right, at our sole discretion, to modify or replace these
      Terms at any time. We will provide at least 30 days' notice before any new
      terms take effect. By continuing to access or use our Service after those
      revisions become effective, you agree to be bound by the revised terms.
    </>
  ),
  'Contact Us': (
    <>
      If you have any questions about these Terms, please contact us at{' '}
      {supportEmail}.
    </>
  ),
}

export default () => {
  return (
    <PageContainer isTranslated={false} language={primaryLanguage}>
      <PageMetaTags title={`${productName} - ${name}`} />
      <LegalPageContent title={name}>
        {Object.entries(content).map(([title, text]) => (
          <LegalPageSection title={title}>{text}</LegalPageSection>
        ))}
      </LegalPageContent>
    </PageContainer>
  )
}
