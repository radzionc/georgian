import { AppIconMetaTags } from './AppIconMetaTags'

export const DocumentMetaTags = () => (
  <>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="manifest" href="/manifest.json" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <AppIconMetaTags />
  </>
)
