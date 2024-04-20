import { Injector } from '@lib/utils/template/Injector'
import { ReactNode, Fragment } from 'react'

export const injectNodes: Injector<ReactNode> = (
  template,
  variables,
): ReactNode => {
  const parts = template.split(/\{\{(\w+)\}\}/)

  return (
    <Fragment>
      {parts.map((part, index) => {
        // Every odd index is a variable name according to the split logic
        if (index % 2 === 1) {
          // Check if part (variable name) exists in variables and return the ReactNode
          return variables[part] ?? `{{${part}}}`
        }
        // Even index parts are plain strings
        return part
      })}
    </Fragment>
  )
}
