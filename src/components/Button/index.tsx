import { ButtonHTMLAttributes, ReactNode } from "react"

import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string;
}

export function Button(props: ButtonProps){
  return(
    <a href={props.url}>
      <button {...props}>{props.children}</button>
    </a>
  )
}