import { RadioInput } from '@georgian/ui/inputs/RadioInput'
import {
  TicketsFilter,
  testSize,
  ticketsFilterOptions,
  useCategoryTest,
} from './CategoryTestProvider'
import { useCopy } from 'copy/CopyProvider'
import { match } from '@georgian/utils/match'

export const CategoryTestTicketsFilter = () => {
  const { ticketsFilter, setTicketsFilter, completedTickets } =
    useCategoryTest()

  const copy = useCopy()

  return (
    <RadioInput<TicketsFilter>
      renderOption={(option) =>
        match(option, {
          all: () => copy.allTickets,
          completed: () => copy.completedTickets,
        })
      }
      options={ticketsFilterOptions}
      value={ticketsFilter}
      onChange={setTicketsFilter}
      isOptionDisabled={(option) => {
        if (option === 'all') return false

        if (completedTickets.length >= testSize) return false

        return copy.completedTicketsTestMin({ count: testSize.toString() })
      }}
    />
  )
}
