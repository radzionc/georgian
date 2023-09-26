import { isProduction } from 'shared'
import { shouldBeDefined } from '@georgian/utils/shouldBeDefined'
import { AmplitudeAnalytics } from '@georgian/ui/analytics/AmplitudeAnalytics'
import { LocalAnalytics } from '@georgian/ui/analytics/LocalAnalytics'

export const analytics = isProduction
  ? new AmplitudeAnalytics(
      shouldBeDefined(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY),
    )
  : new LocalAnalytics()
