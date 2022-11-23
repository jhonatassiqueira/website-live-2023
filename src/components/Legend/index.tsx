import { HTMLAttributes } from "react";

import './style.css'

interface LegendProsp extends HTMLAttributes<HTMLSpanElement> {}

export function Legend(props: LegendProsp){
  return(
    <span className="legend">{props.children}</span>
  )
}