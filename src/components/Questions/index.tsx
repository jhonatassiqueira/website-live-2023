import { CaretDown } from "phosphor-react";
import { Button } from "../Button";
import { Wrapper } from "../Wrapper";

import './style.css'

export function Questions(){

  function handleQuestion(e: HTMLElement){
    const element = e.parentElement?.querySelector('p')
    
    if(!element?.classList.contains('active')){
      element?.classList.add('active')
    }else{
      element?.classList.remove('active')
    }
  }
  return(
    <Wrapper id="questions">
      <h2>Perguntas Frequentes</h2>

      <ul>
        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>Como a Live Contabilidade pode me ajudar?</span>
            <CaretDown size={18}/>
          </div>

          <p>Com a nossa equipe de profissionais podemos garantir não só apenas que os processos contábeis sejam realizados no prazo, mas também estaremos à disposição para sanar dúvidas e responde-las da melhor forma possível.</p>
        </li>

        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>Como a Live vai me garantir um bom atendimento?</span>
            <CaretDown size={18} />
          </div>

          <p>Temos um atendimento totalmente humanizado, buscamos sempre a melhor comunicação e transparência com nossos clientes.</p>
        </li>

        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>Minha empresa é muito pequena. A Live pode me ajudar?</span>
            <CaretDown size={18} />
          </div>

          <p>Com toda certeza, aqui na Live impulsionamos o crescimento de nossos clientes e estamos aqui para o guiar nessa nova jornada do empreendedorismo.</p>
        </li>

        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>Abrir uma empresa é muito burocrático?</span>
            <CaretDown size={18} />
          </div>

          <p>Não, ao contrário do que muitos pensam abrir uma empresa não tem que ser uma dor de cabeça, nós da Live faremos todo o processo, dessa forma você se preocupa apenas em tocar seu negócio.</p>
        </li>

        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>É caro contratar a Live para cuidar da minha contabilidade?</span>
            <CaretDown size={18} />
          </div>

          <p>Não. Temos planos que caberá no seu bolso e atenderá suas necessidades, você economiza tempo e dinheiro.</p>
        </li>

        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>Por que é importante eu me regularizar?</span>
            <CaretDown size={18} />
          </div>

          <p>A regularização permite que você se destaque dos seus concorrentes, oferecendo mais profissionalismo. Além do mais, você poderá controlar o financeiro de sua empresa separando das contas pessoais, e com isso surgirão novas oportunidades de negócios, créditos e parcerias.</p>
        </li>

        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>Como a Live vai economizar meu tempo?</span>
            <CaretDown size={18} />
          </div>

          <p>Utilizamos ferramentas de alta tecnologia que ajudam na interação entre a Live e o cliente. Isso nos ajuda a otimizar muitos processos, gerando ganho de tempo para ambos.</p>
        </li>

        <li>
          <div className="header" onClick={e => handleQuestion(e.currentTarget)}>
            <span>Como a Live vai economizar meu dinheiro?</span>
            <CaretDown size={18} />
          </div>

          <p>Com ferramentas tecnológicas de alta perfomance alinhado com uma equipe com 10 anos de experiência, vamos te ajudar a poupar o seu dinheiro, orientando na gestão dos seus custos, despesas e tomadas de decisões.</p>
        </li>
      </ul>

      <Button url="/abertura-empresa" className="bg-orange-900">Quero abrir minha empresa!</Button>
    </Wrapper>
  )
}