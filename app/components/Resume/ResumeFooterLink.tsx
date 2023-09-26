import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { defaultTransitionCSS } from '@georgian/ui/ui/animations/transitions'
import { HStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import { getColor } from '@georgian/ui/ui/theme/getters'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  icon: ReactNode
  url: string
}

const Container = styled(ExternalLink)`
  color: ${getColor('textSupporting')};
  ${defaultTransitionCSS};

  :hover {
    color: ${getColor('text')};
  }
`

export const ResumeFooterLink = ({ name, icon, url }: Props) => {
  return (
    <Container to={url}>
      <HStack alignItems="center" gap={8}>
        <Text color="regular">{icon}</Text>
        <Text size={14}>{name}</Text>
      </HStack>
    </Container>
  )
}
