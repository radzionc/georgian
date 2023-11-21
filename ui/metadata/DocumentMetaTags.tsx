import { AppIconMetaTags } from './AppIconMetaTags'

interface DocumentMetaTagsProps {
  twitterId?: string
  image?: string
  language?: string
}

export const DocumentMetaTags = ({
  twitterId,
  image,
  language,
}: DocumentMetaTagsProps) => (
  <>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <link rel="manifest" href="/manifest.json" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    {twitterId && <meta name="twitter:site" content={twitterId} />}

    {image && (
      <>
        <meta property="og:image" content={image} />
        <meta name="twitter:image:src" content={image} />
      </>
    )}

    {language && <meta httpEquiv="Content-Language" content={language} />}

    <AppIconMetaTags />
  </>
)
