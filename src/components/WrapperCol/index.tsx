import { HTMLAttributes } from "react";

interface WrapperColProps extends HTMLAttributes<HTMLDivElement> {}

export function WrapperCol(props: WrapperColProps){
  return(
    <div {...props}>{props.children}</div>
  )
}