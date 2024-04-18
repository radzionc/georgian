import type { AppProps } from 'next/app'
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from '@lib/ui/theme/ThemeProvider'
import { Page } from '@lib/next-ui/Page'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { analytics } from '../analytics'
import { getQueryClient } from '../query/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from '../errors/components/ErrorBoundary'
import { FullSizeErrorFallback } from '../errors/components/FullSizeErrorFallback'
import { UserStateProvider } from '../user/components/UserStateProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

interface MyAppProps extends AppProps {
  Component: Page
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(getQueryClient)

  const router = useRouter()

  const { pathname } = router
  useEffect(() => {
    analytics.trackEvent('Visit page', { pathname })
  }, [pathname])

  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  const component = getLayout(<Component {...pageProps} />)

  return (
    <ThemeProvider value="dark">
      <GlobalStyle fontFamily={inter.style.fontFamily} />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallback={<FullSizeErrorFallback />}>
          <UserStateProvider>{component}</UserStateProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
