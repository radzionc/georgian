import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { MetaTags } from '@georgian/ui/metadata/MetaTags'
import { AppIconMetaTags } from '@georgian/ui/metadata/AppIconMetaTags'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />), //gets the styles from all the components inside <App>
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <MetaTags
            title="Prepare for Georgian Citizenship Exam: Language, Law, History Guides & Practice Tests"
            description="Ace your Georgian Citizenship Exam with our comprehensive study guides, practice tests, and resources tailored for success in Language, Law, and History. Start preparing today!"
            url={process.env.NEXT_PUBLIC_BASE_URL}
            twitterId="@radzionc"
          />
          <AppIconMetaTags />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
