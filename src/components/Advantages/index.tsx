import { ChatsCircle, CreditCard, DeviceMobile } from "phosphor-react";
import { Button } from "../Button";
import { Wrapper } from "../Wrapper";

import './style.css'

export function Advantages(){
  return(
    <Wrapper id="advantages">
      <div className="cards">
        <div className="card">
          <div className="icon">
            <DeviceMobile size={40} />
          </div>

          <div className="content">
            <span>Sua contabilidade na palma da mão</span>
            <p>Com o nosso aplicativo, você terá acesso a todas as informações estratégicas da sua contabilidade de forma fácil e simples. É a era digital transformando seu negócio!</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <CreditCard size={40} />
          </div>

          <div className="content">
            <span>Pagamento facilitado e sem fidelidade</span>
            <p>Com diversos métodos de pagamentos e sem fidelidade com nossa equipe, você irá sentir na pele a diferença que faz ter uma empresa que se preocupa com seu dinheiro!</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <ChatsCircle size={40} />
          </div>

          <div className="content">
            <span>Suporte humanizado</span>
            <p>Tire suas dúvidas com contadores de verdade, e não robôs! Nosso suporte funciona das 8h às 18h e você poderá fazer solicitações a qualquer momento em nosso aplicativo!</p>
          </div>
        </div>
      </div>

      <Button url="#form-contact" className="bg-orange-900">Quero a contabilidade dos sonhos!</Button>
    </Wrapper>
  )
}