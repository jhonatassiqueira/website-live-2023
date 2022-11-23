import { Briefcase, Code, ShoppingCart, Wrench } from 'phosphor-react'
import { Button } from '../Button'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'
import { WrapperCol } from '../WrapperCol'

import './style.css'

export function Services(){
  return(
    <Wrapper className='bg-gradient' id="services">
      <Title>Prestamos serviços para...</Title>
      
      <div className="cards">
        <div className="card">
          <a href="/ecommerce">
            <div className="icon">
              <ShoppingCart size={40} />
            </div>

            <div className="content">
              <span>E-commerce</span>
              <p>Regularize sua loja online e tenha a Live Contabilidade como uma parceira estratégica no seu negócio, ajudando sua empresa a crescer de maneira saudável.</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="/prestador-de-servicos">
            <div className="icon">
              <Wrench size={40} />
            </div>

            <div className="content">
              <span>Prestador de Serviço</span>
              <p>Tenha sua contabilidade em dia com nosso atendimento especializado. Garanta todos os seus direitos e pague apenas o necessário!</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="/representante-comercial">
            <div className="icon">
              <Briefcase size={40} />
            </div>

            <div className="content">
              <span>Representante Comercial</span>
              <p>Escale suas vendas e conte conosco para te ajudar em cada uma delas. Desde sua regularização até o suporte online, estaremos sempre com você.</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="/area-ti">
            <div className="icon">
              <Code size={40} />
            </div>

            <div className="content">
              <span>Área de TI</span>
              <p>Profissionais da área mais dinâmica do mercado merecem um atendimento especializado. Na Live Contabilidade, temos uma equipe própria para a área de TI.</p>
            </div>
          </a>
        </div>
      </div>

      <Button url='#form-contact' className='bg-white-900'>Quero a Contabilidade dos sonhos!</Button>
    </Wrapper>
  )
}