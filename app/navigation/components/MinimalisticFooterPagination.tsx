import { InputProps } from '@georgian/ui/props'
import { HStack } from '@georgian/ui/ui/Stack'
import { Button } from '@georgian/ui/ui/buttons/Button'
import { ArrowLeftIcon } from '@georgian/ui/ui/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@georgian/ui/ui/icons/ArrowRightIcon'
import { reverseIf } from '@georgian/utils/array/reverseIf'

interface MinimalisticFooterPaginationProps extends InputProps<number> {
  itemsCount: number
}

export const MinimalisticFooterPagination = ({
  value,
  onChange,
  itemsCount,
}: MinimalisticFooterPaginationProps) => {
  const options = [
    {
      text: 'Previous',
      icon: <ArrowLeftIcon />,
      isDisabled: value === 0,
      value: value - 1,
    },
    {
      text: 'Next',
      icon: <ArrowRightIcon />,
      isDisabled: value === itemsCount - 1,
      value: value + 1,
    },
  ]

  return (
    <HStack fullWidth alignItems="center" justifyContent="center" gap={8}>
      {options.map(({ text, icon, isDisabled, value }, index) => (
        <Button
          kind="ghost"
          isDisabled={isDisabled}
          onClick={() => onChange(value)}
        >
          <HStack alignItems="center" gap={8}>
            {reverseIf([icon, text], index === 1)}
          </HStack>
        </Button>
      ))}
    </HStack>
  )
}
