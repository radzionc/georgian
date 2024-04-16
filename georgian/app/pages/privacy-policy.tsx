import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { productName, supportEmail } from '@georgian/config'
import { LegalPageContent } from '@lib/ui/website/legal/LegalPageContent'
import { LegalPageSection } from '@lib/ui/website/legal/LegalPageSection'
import { PageContainer } from '../components/PageContainer'
import { primaryLanguage } from '@georgian/languages/Language'

const name = 'Privacy policy'

const content = {
  Introduction: (
    <>
      <p>
        Welcome to {productName}! We are committed to protecting your personal
        information and your right to privacy. If you have any questions or
        concerns about this privacy notice, or our practices with regards to
        your personal information, please contact us at {supportEmail}.
      </p>
    </>
  ),
  'Information We Collect': (
    <>
      <p>When you use our Service, we may collect the following information:</p>
      <ul>
        <li>
          Personal Information: name, email address, and other contact details.
        </li>
        <li>
          Usage Data: information on how the Service is accessed and used.
        </li>
      </ul>
    </>
  ),
  'How We Use Your Information': (
    <>
      <p>We use the information we collect in various ways, including to:</p>
      <ul>
        <li>Provide, operate, and maintain our Service.</li>
        <li>Improve, personalize, and expand our Service.</li>
        <li>Understand and analyze how you use our Service.</li>
        <li>Develop new products, services, features, and functionality.</li>
        <li>
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the Service, and for marketing and promotional
          purposes.
        </li>
      </ul>
    </>
  ),
  'Sharing Your Personal Information': (
    <>
      <p>
        We do not share or sell your personal information to third parties.
        However, we may share your information with our service providers to the
        extent necessary to provide the Service.
      </p>
    </>
  ),
  'Security of Your Information': (
    <>
      <p>
        We take the security of your personal information seriously and
        implement appropriate technical and organizational measures to protect
        your information from unauthorized access, alteration, disclosure, or
        destruction.
      </p>
    </>
  ),
  'Your Privacy Rights': (
    <>
      <p>
        You have the right to access, update, or delete the information we have
        on you. You can exercise these rights by contacting us at {supportEmail}
        .
      </p>
    </>
  ),
  "Children's Privacy": (
    <>
      <p>
        Our Service does not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from children
        under 13. If you are a parent or guardian and you are aware that your
        child has provided us with personal information, please contact us at{' '}
        {supportEmail}.
      </p>
    </>
  ),
  'Changes to This Privacy Policy': (
    <>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
    </>
  ),
  'Contact Us': (
    <>
      <p>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at {supportEmail}.
      </p>
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
