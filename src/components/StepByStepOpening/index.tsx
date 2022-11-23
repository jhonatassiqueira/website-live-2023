import { ArrowsClockwise, ChatsCircle, FileText, Popcorn, Prohibit } from "phosphor-react";
import { Button } from "../Button";
import { Title } from "../Title";
import { Wrapper } from "../Wrapper";

import './style.css'

export function StepByStepOpening(){
  return(
    <Wrapper className="bg-gradient" id="step-by-step-opening">
      <Title>Como funciona?</Title>

      <ul className="advantages-opening">
        <li>
          <div className="icon">
            <ChatsCircle size={48}/>
          </div>
          <span>Você entra em contato com um dos nossos contadores</span>
        </li>
        <li>
          <div className="icon">
            <FileText size={48}/>
          </div>
          <span>Você entra em contato com um dos nossos contadores</span>
        </li>
        <li>
          <div className="icon">
            <Popcorn size={48}/>
          </div>
          <span>Você entra em contato com um dos nossos contadores</span>
        </li>
      </ul>

      <Title>Serviços Complementares</Title>

      <ul className="services-complement-opening">
        <li>
          <div className="icon">
            <ArrowsClockwise size={32}/>
          </div>
          <div className="content">
            <h3>Alterações na sua Empresa</h3>
            <p>Mudanças no Contrato Social, CNAEs, quadro de sócios, regime tributário, e muito mais. Conte com nossa equipe!</p>
          </div>
        </li>
        <li>
          <div className="icon">
            <Prohibit size={32}/>
          </div>
          <div className="content">
            <h3>Baixa da Empresa</h3>
            <p>Precisa encerrar suas atividades? Nossa equipe vai te ajudar a fazer isto da forma mais simples e barata!</p>
          </div>
        </li>
      </ul>

      <Button url="#form-contact" className="bg-white-900">Quero abrir minha empresa!</Button>
    </Wrapper>
  )
}