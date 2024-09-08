import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { AuthProviders } from './AuthFlow/AuthProviders'
import { AuthView } from '@lib/ui/auth/AuthView'
import { productName } from '@georgian/config'
import { useCopy } from '../../copy/CopyProvider'
import { VStack } from '@lib/ui/layout/Stack'
import { SignUpAgreement } from './AuthFlow/SignUpAgreement'

export const SignInContent = () => {
  const copy = useCopy()
  return (
    <AuthView title={copy.authTitle}>
      <PageMetaTags title={[copy.authTitle, productName].join(' | ')} />
      <VStack fullWidth gap={24}>
        <AuthProviders />
        <SignUpAgreement />
      </VStack>
    </AuthView>
  )
}
