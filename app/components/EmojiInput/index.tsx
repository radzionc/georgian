import { Spinner } from '@georgian/ui/ui/Spinner'
import { HStack } from '@georgian/ui/ui/Stack'
import { centerContent } from '@georgian/ui/css/centerContent'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { ExpandableInputOpener } from '../../../ui/ui/inputs/ExpandableInputOpener'
import { Menu } from '@georgian/ui/ui/Menu'
import { Text } from '@georgian/ui/ui/Text'
import { InputProps } from '@georgian/ui/props'

const EmojiPicker = dynamic(() => import('./EmojiPicker'), {
  loading: () => (
    <EmojiMartFallback>
      <HStack gap={4} alignItems="center">
        <Spinner />
        <Text>Loading emoji picker</Text>
      </HStack>
    </EmojiMartFallback>
  ),
  ssr: false,
})

interface EmojiInputProps extends InputProps<string> {}

const EmojiMartFallback = styled.div`
  width: 352px;
  height: 435px;
  ${centerContent};
`

export const EmojiInput = ({ value, onChange }: EmojiInputProps) => {
  return (
    <Menu
      title="Select an emoji"
      renderOpener={(props) => (
        <ExpandableInputOpener type="button" {...props}>
          <Text color="contrast" size={32}>
            {value}
          </Text>
        </ExpandableInputOpener>
      )}
      renderContent={({ onClose }) => (
        <EmojiPicker
          onSelect={(value) => {
            onChange(value)
            onClose()
          }}
        />
      )}
    />
  )
}
