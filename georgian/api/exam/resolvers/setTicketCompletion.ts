import { assertUserId } from '../../auth/assertUserId'
import { getUser, updateUser } from '@georgian/db/user'
import { ApiResolver } from '../../resolvers/ApiResolver'
import { without } from '@lib/utils/array/without'

export const setTicketCompletion: ApiResolver<'setTicketCompletion'> = async ({
  context,
  input: { category, ticketNumber, value },
}) => {
  const userId = assertUserId(context)

  const { completedTickets } = await getUser(userId, ['completedTickets'])

  await updateUser(userId, {
    completedTickets: {
      ...completedTickets,
      [category]: value
        ? [...completedTickets[category], ticketNumber]
        : without(completedTickets[category], ticketNumber),
    },
  })
}
