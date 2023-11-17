import { Page } from 'layout/Page'
import { TranslatedPageProps } from './TranslatedPageProps'
import { TranslationProvider } from './TranslationProvider'

export const withTranslation =
  <T extends TranslatedPageProps>(Page: Page<T>) =>
  (props: T) => {
    return (
      <TranslationProvider language={props.language}>
        <Page {...props} />
      </TranslationProvider>
    )
  }
