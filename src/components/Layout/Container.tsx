import React from 'react'
import classnames from 'classnames'
import { IContainerProps } from './types'

const Container = ({ className, children }: IContainerProps) => {
  return (
    <div
      className={classnames(
        'container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg',
        className
      )}>
      {children}
    </div>
  )
}

export default Container
