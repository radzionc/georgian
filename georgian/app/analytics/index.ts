import { AmplitudeAnalytics } from '@lib/ui/analytics/AmplitudeAnalytics'
import { LocalAnalytics } from '@lib/ui/analytics/LocalAnalytics'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { isProduction } from '../shared'

export const analytics = isProduction
  ? new AmplitudeAnalytics(
      shouldBePresent(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY),
    )
  : new LocalAnalytics()
