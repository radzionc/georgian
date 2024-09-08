import { useCategoryTest } from './CategoryTestProvider'
import { CategoryTestSummary } from './CategoryTestSummary'
import { CategoryTestItem } from './CategoryTestItem'

export const CategoryTestContent = () => {
  const { currentTestNumber } = useCategoryTest()

  if (currentTestNumber === null) {
    return <CategoryTestSummary />
  }

  return <CategoryTestItem testNumber={currentTestNumber} />
}
