import { useCallback, useMemo } from 'react'
import { useUserState } from '../../user/state/UserStateContext'
import { ComponentWithValueProps } from '@lib/ui/props'
import { TicketKey } from '@georgian/entities/Ticket'
import { ClientOnly } from '@lib/ui/base/ClientOnly'
import { CheckCircleIcon } from '@lib/ui/icons/CheckCircleIcon'
import { HStack } from '@lib/ui/layout/Stack'
import { useAuthRedirect } from '../../auth/hooks/useAuthRedirect'
import { useAuthSession } from '../../auth/hooks/useAuthSession'
import { useApiMutation } from '@georgian/api-ui/hooks/useApiMutation'
import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { interactive } from '@lib/ui/css/interactive'
import { transition } from '@lib/ui/css/transition'
import { getColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'
import { useCopy } from '../../copy/CopyProvider'
import { without } from '@lib/utils/array/without'

const CompletionButton = styled(UnstyledButton)<{ isCompleted: boolean }>`
  font-weight: 500;
  ${transition};
  ${interactive};
  ${({ isCompleted }) =>
    isCompleted
      ? css`
          color: ${getColor('success')};
        `
      : css`
          color: ${getColor('textSupporting')};
          :hover {
            color: ${getColor('contrast')};
          }
        `};
`

export const TicketCompletionStatus = ({
  value: { ticketNumber, category },
}: ComponentWithValueProps<TicketKey>) => {
  const copy = useCopy()

  const { state, updateState } = useUserState()
  const isCompleted = useMemo(() => {
    if (!state) return false

    return state.completedTickets[category].includes(ticketNumber)
  }, [state, category, ticketNumber])

  const { toAuthenticationPage } = useAuthRedirect()

  const [authSession] = useAuthSession()

  const { mutate } = useApiMutation('setTicketCompletion')

  const handleClick = useCallback(() => {
    if (!authSession) {
      toAuthenticationPage()
    } else {
      const value = !isCompleted
      updateState((prev) => {
        const { completedTickets } = prev

        return {
          ...prev,
          completedTickets: {
            ...completedTickets,
            [category]: value
              ? [...completedTickets[category], ticketNumber]
              : without(completedTickets[category], ticketNumber),
          },
        }
      })
      mutate({
        category: category,
        ticketNumber: ticketNumber,
        value,
      })
    }
  }, [
    authSession,
    category,
    isCompleted,
    mutate,
    ticketNumber,
    toAuthenticationPage,
    updateState,
  ])

  return (
    <ClientOnly>
      <CompletionButton onClick={handleClick} isCompleted={isCompleted}>
        <HStack alignItems="center" gap={8}>
          <CheckCircleIcon />
          <div>{isCompleted ? copy.learned : copy.markAsLearned}</div>
        </HStack>
      </CompletionButton>
    </ClientOnly>
  )
}
