import { ReactNode } from 'react'
import { HSLA } from '../colors/HSLA'

export type ClosableComponentProps = {
  onClose: () => void
}

export type ComponentWithIconProps = {
  icon: ReactNode
}

export type ComponentWithChildrenProps = {
  children: ReactNode
}

export type ComponentWithBackActionProps = {
  onBack: () => void
}

export type ComponentWithClassNameProps = {
  className?: string
}

export type ClickableComponentProps = {
  onClick: () => void
}

export type FinishableComponentProps = {
  onFinish: () => void
}

export interface InputProps<T> {
  value: T
  onChange: (value: T) => void
}

export interface ComponentWithErrorProps {
  error?: string
}

export interface TitledComponentProps {
  title: ReactNode
}

export interface StyledComponentWithColorProps {
  $color: HSLA
}

export interface SelectableComponentProps<T> {
  onSelect: (value: T) => void
}

export interface UIComponentProps {
  style?: React.CSSProperties
  className?: string
}

export interface LabeledComponentProps {
  label: ReactNode
}

export type PromptProps = {
  onSuccess: () => void
  onCancel: () => void
}

export interface ComponentWithValueProps<T> {
  value: T
}

export type ActionGuardProps<T = () => void | Promise<void>> = {
  action: T
  render: (params: { action: T }) => ReactNode
}
