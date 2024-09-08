import { RadioInput } from '@lib/ui/inputs/RadioInput'
import { testSize, useCategoryTest } from './CategoryTestProvider'
import { useCopy } from '@georgian/app/copy/CopyProvider'
import { match } from '@lib/utils/match'
import { TestPreference, testPreferences } from '../hooks/useTestPreferences'
import { injectVariables } from '@lib/utils/template/injectVariables'

export const CategoryTestTicketsFilter = () => {
  const { testPreference, setTestPreference, completedTickets } =
    useCategoryTest()

  const copy = useCopy()

  return (
    <RadioInput<TestPreference>
      renderOption={(option) =>
        match(option, {
          all: () => copy.allTickets,
          completed: () => copy.completedTickets,
        })
      }
      options={testPreferences}
      value={testPreference}
      onChange={setTestPreference}
      isOptionDisabled={(option) => {
        if (option === 'all') return false

        if (completedTickets.length >= testSize) return false

        return copy.completedTicketsTestMin(
          { count: testSize.toString() },
          injectVariables,
        )
      }}
    />
  )
}
