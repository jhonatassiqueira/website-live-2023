import { HTMLAttributes } from "react";

import './style.css'

interface TextProps extends HTMLAttributes<HTMLParagraphElement>{}

export function Text(props: TextProps){
  return(
    <>
      <p {...props}></p>
      <br />
    </>
  )
}