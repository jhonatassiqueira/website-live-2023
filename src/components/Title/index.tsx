import { HTMLAttributes } from "react";

import './style.css'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function Title(props: TitleProps){
  return(
    <h2>{props.children}</h2>
  )
}