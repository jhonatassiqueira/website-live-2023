import { HTMLAttributes } from "react";

import './style.css'

interface SubTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function SubTitle(props: SubTitleProps){
  return(
    <h3>{props.children}</h3>
  )
}