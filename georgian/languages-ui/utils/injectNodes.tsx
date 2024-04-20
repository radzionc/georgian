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
          const node = variables[part]
          if (!node) {
            throw new Error(`Variable ${part} is not provided`)
          }
          return <Fragment key={index}>{node}</Fragment>
        }
        // Even index parts are plain strings
        return <Fragment key={index}>{part}</Fragment>
      })}
    </Fragment>
  )
}
