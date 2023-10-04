import { RadioInput } from '@georgian/ui/ui/inputs/RadioInput'
import { capitalizeFirstLetter } from '@georgian/utils/capitalizeFirstLetter'
import {
  TicketsFilter,
  testSize,
  ticketsFilterOptions,
  useCategoryTest,
} from './CategoryTestProvider'

export const CategoryTestTicketsFilter = () => {
  const { ticketsFilter, setTicketsFilter, completedTickets } =
    useCategoryTest()

  return (
    <RadioInput<TicketsFilter>
      renderOption={(option) => `${capitalizeFirstLetter(option)} tickets`}
      options={ticketsFilterOptions}
      value={ticketsFilter}
      onChange={setTicketsFilter}
      isOptionDisabled={(option) => {
        if (option === 'all') return false

        if (completedTickets.length >= testSize) return false

        return `You need to mark as completed at least ${testSize} tickets to take this test.`
      }}
    />
  )
}
