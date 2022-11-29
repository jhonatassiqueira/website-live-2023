import { ButtonHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom";

import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string;
}

export function Button(props: ButtonProps){
  return(
    <Link to={props.url}>
      <button {...props}>{props.children}</button>
    </Link>
  )
}