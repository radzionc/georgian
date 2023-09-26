import { ExternalLink } from '@georgian/ui/navigation/Link/ExternalLink'
import { defaultTransitionCSS } from '@georgian/ui/ui/animations/transitions'
import { HStack, VStack } from '@georgian/ui/ui/Stack'
import { Text } from '@georgian/ui/ui/Text'
import styled from 'styled-components'
import { Responsibilities } from './Responsibilities'
import { getColor } from '@georgian/ui/ui/theme/getters'
import { round } from '@georgian/ui/css/round'

interface Props {
  name: string
  url: string
  description: string
  achievement?: string
  responsibilities?: string[]
}

const Title = styled(Text)`
  border-bottom: 1px solid;
  ${defaultTransitionCSS}
  line-height: 1.24;

  :hover {
    color: ${getColor('primary')};
  }
`

const Badge = styled.div`
  padding: 4px 8px;
  background: ${getColor('mist')};
  ${round};
`

export const PersonalProject = ({
  name,
  url,
  description,
  achievement,
  responsibilities,
}: Props) => {
  return (
    <VStack alignItems="start" gap={4}>
      <HStack alignItems="center" gap={16}>
        <ExternalLink to={url}>
          <Title weight="bold">{name}</Title>{' '}
        </ExternalLink>
        {achievement && (
          <Badge>
            <Text color="supporting" weight="semibold" size={14}>
              {achievement}
            </Text>
          </Badge>
        )}
      </HStack>
      <Text color="supporting">{description}</Text>
      {responsibilities && <Responsibilities items={responsibilities} />}
    </VStack>
  )
}
