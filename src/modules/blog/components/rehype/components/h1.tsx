import React from 'react'
import Balancer from 'react-wrap-balancer'

export function H1({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className='mb-7 max-w-[550px] text-3xl font-light lg:mb-16 lg:text-5xl' {...props}>
      <Balancer>{children}</Balancer>
    </h1>
  )
}
