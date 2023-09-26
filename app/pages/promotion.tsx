import { DemoPage } from 'components/DemoPage'
import { InteractivePromotion } from '@georgian/ui/ui/InteractivePromotion'
import styled from 'styled-components'

import { ShowAfterDelay } from '@georgian/ui/ui/ShowAfterDelay'
import { takeWholeSpace } from '@georgian/ui/css/takeWholeSpace'
import { PersistentStateKey, usePersistentState } from 'state/persistentState'
import { makeDemoPage } from 'layout/makeDemoPage'

const Image = styled.img`
  ${takeWholeSpace};
  object-fit: contain;
`

export default makeDemoPage(() => {
  const [wasShown, setWasShown] = usePersistentState(
    PersistentStateKey.Promotion,
    false,
  )
  return (
    <DemoPage youtubeVideoId="Cnv0K3izNUk" title="Interactive Promotion">
      {!wasShown && (
        <ShowAfterDelay ms={3000}>
          <InteractivePromotion
            onDismiss={() => setWasShown(true)}
            onAccept={() => setWasShown(true)}
            url="https://increaser.org"
            text="Hi there! Can I share a tool for deep work with you?"
            character={<Image src="/images/hello.png" alt="hello" />}
            speechPlacement={{
              left: 280,
              bottom: 28,
            }}
          />
        </ShowAfterDelay>
      )}
    </DemoPage>
  )
})
