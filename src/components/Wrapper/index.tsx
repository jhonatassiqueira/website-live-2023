import { AllHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

import './style.css'

interface WrapperProps extends HTMLAttributes<HTMLElement>{}

export function Wrapper(props: WrapperProps){
  return(
    <section {...props}>
      <div className='container'>{props.children}</div>
    </section>
  )
}