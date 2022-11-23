import { ChatsCircle, Popcorn, Rocket } from "phosphor-react";
import { Button } from "../Button";
import { Title } from "../Title";
import { Wrapper } from "../Wrapper";

import './style.css'

export function StepByStepFinance(){
  return(
    <Wrapper id="step-by-step-finance" className="bg-gradient">
      <Title>Como funciona o BPO Financeiro?</Title>
      
      <ul className="advantages-finance">
        <li>
          <div className="icon">
            <ChatsCircle size={48}/>
          </div>
          <span>Você entra em contato com um dos nossos contadores</span>
        </li>
        <li>
          <div className="icon">
            <Rocket size={48}/>
          </div>
          <span>Nós iniciamos o serviço de BPO Financeiro</span>
        </li>
        <li>
          <div className="icon">
            <Popcorn size={48}/>
          </div>
          <span>... e só! Bom descanso, nós cuidaremos de tudo para você.</span>
        </li>
      </ul>

      <Button url="#form-contact" className="bg-white-900">Quero Terceirizar meu Financeiro</Button>
    </Wrapper>
  )
}