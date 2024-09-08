import { InputProps } from '@lib/ui/props'
import { HStack } from '@lib/ui/layout/Stack'
import { Button } from '@lib/ui/buttons/Button'
import { ArrowLeftIcon } from '@lib/ui/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@lib/ui/icons/ArrowRightIcon'
import { reverseIf } from '@lib/utils/array/reverseIf'
import React from 'react'

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
          key={text}
          kind="ghost"
          isDisabled={isDisabled}
          onClick={() => onChange(value)}
        >
          <HStack alignItems="center" gap={8}>
            {reverseIf([icon, text], index === 1).map((element, index) => (
              <React.Fragment key={index}>{element}</React.Fragment>
            ))}
          </HStack>
        </Button>
      ))}
    </HStack>
  )
}
