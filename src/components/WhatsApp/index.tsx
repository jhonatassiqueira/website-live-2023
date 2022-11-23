import { WhatsappLogo } from "phosphor-react";

import './style.css'

interface WhatsAppProps{
  url: string;
}

export function WhatsApp(props: WhatsAppProps){
  return(
    <div id="btn-whatsapp">
      <a href={props.url} target="_blank">
        <WhatsappLogo size={32} />
      </a>
    </div>
  )
}