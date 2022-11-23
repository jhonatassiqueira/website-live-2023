import { ArrowUp } from "phosphor-react";

import './style.css'

export function ButtonUp(){

  function handleTopPage(e: HTMLElement){
    scrollTo({ top: 0, behavior: "smooth" });
  }

  return(
    <div id="buttonUp" onClick={e => handleTopPage(e.currentTarget)}>
      <ArrowUp size={24} />
    </div>
  )
}