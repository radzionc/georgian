import { ReactNode } from 'react'
import { TabNavigation } from '../../ui/TabNavigation'
import { range } from '@georgian/utils/array/range'
import { HStack, VStack } from '../../ui/Stack'
import { Button } from '../../ui/buttons/Button'

interface PaginatedViewProps<T> {
  renderItem: (item: T) => ReactNode
  items: T[]
  pageCount: number
  renderPageOption: (pageNumber: number) => ReactNode
  currentPage: number
  setCurrentPage: (pageNumber: number) => void
}

export function PaginatedView<T>({
  renderItem,
  items,
  pageCount,
  renderPageOption,
  currentPage,
  setCurrentPage,
}: PaginatedViewProps<T>) {
  const pages = range(pageCount)

  return (
    <>
      <TabNavigation
        groupName="page"
        views={pages}
        getViewName={(page) => page.toString()}
        renderOption={renderPageOption}
        activeView={currentPage}
        onSelect={(page) => setCurrentPage(page)}
      />
      <VStack gap={16}>{items.map(renderItem)}</VStack>
      <VStack fullWidth alignItems="center">
        <HStack gap={8}>
          {currentPage > 0 && (
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              kind="ghostSecondary"
            >
              Previous
            </Button>
          )}
          {currentPage < pageCount - 1 && (
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              kind="ghostSecondary"
            >
              Next
            </Button>
          )}
        </HStack>
      </VStack>
    </>
  )
}
