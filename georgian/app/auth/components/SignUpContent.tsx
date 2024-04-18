import { AuthProviders } from './AuthFlow/AuthProviders'
import { VStack } from '@lib/ui/layout/Stack'
import { SignUpAgreement } from './AuthFlow/SignUpAgreement'
import { AuthView } from '@lib/ui/auth/AuthView'
import { PageMetaTags } from '@lib/next-ui/metadata/PageMetaTags'
import { productName } from '@georgian/config'

export const SignUpContent = () => {
  return (
    <AuthView title={`Join ${productName}`}>
      <PageMetaTags title={['Sign up', productName].join(' | ')} />
      <VStack fullWidth gap={24}>
        <AuthProviders />
        <SignUpAgreement />
      </VStack>
    </AuthView>
  )
}
