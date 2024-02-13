import type { AppProps } from 'next/app'
import { ReactNode, useEffect } from 'react'
import { ThemeProvider } from '@lib/ui/theme/ThemeProvider'
import { Page } from '@lib/next-ui/Page'

import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { analytics } from '../analytics'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

interface MyAppProps extends AppProps {
  Component: Page
}

function MyApp({ Component, pageProps }: MyAppProps) {
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
      {component}
    </ThemeProvider>
  )
}

export default MyApp
