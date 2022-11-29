import { Quotes } from 'phosphor-react'
import { Button } from '../Button'
import { Wrapper } from '../Wrapper'

import './style.css'

import LogoOlitel from '../../img/logotipos/Olitel.png';
import LogoNunes from '../../img/logotipos/Nunes.jpg';
import Stars from '../../img/Stars.png';


interface DepositionsProps {
  callToAction: string;
  url: string;
}

export function Depositions(props: DepositionsProps){
  return(
    <Wrapper className='bg-gradient' id="depositions">
      <div className="threeNumbers">
        <div>
          <h2>200+</h2>
          <span>clientes satisfeitos</span>
        </div>
        <div>
          <h2>10+</h2>
          <span>anos de experiência</span>
        </div>
        <div>
          <h2>3000+</h2>
          <span>atendimentos realizados</span>
        </div>
      </div>
      
      <div className="cards">
        <div className="card">
          <Quotes size={48} />
          <img src={ Stars } alt="estrelas" />

          <p>Atuo na área de reestruturações financeiras e hoje conto com a assessoria da Live na busca de soluções fiscais e tributárias para atender meus clientes. A Live possui grande experiência no processo digital, fazendo que os processos sejam muito mais seguros e rápidos. Excelente atendimento.</p>

          <div className="users">
            <img src={ LogoOlitel } alt="logotipo" />

            <div>
              <h2>Leandro Teixeira</h2>
              <span>Controller, Olitel Brasil</span>
            </div>
          </div>
        </div>

        <div className="card">
          <Quotes size={48} />
          <img src={ Stars } alt="estrelas" />

          <p>Somos Clientes da Live desde antes de virarmos uma empresa, ou clientes de fato. Não temos nenhum tipo de preocupação graças aos profissionais da Live que cuidam de tudo pra nós. Sempre que surge uma dúvida, uma solicitação estão prontamente dispostos a nos atender. Cliente 100% satisfeita!</p>

          <div className="users">
            <img src={ LogoNunes } alt="logotipo" />

            <div>
              <h2>Jéssica Nunes</h2>
              <span>Financeiro, Nunes e Nogueira Acabamentos</span>
            </div>
          </div>
        </div>
      </div>

      <Button url={props.url} className='bg-white-900'>{props.callToAction}</Button>
    </Wrapper>
  )
}