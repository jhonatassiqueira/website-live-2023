import { useState } from "react";
import { Wrapper } from "../Wrapper";
import IMask from 'imask';

import './style.css'

import Foguete from '../../img/Rocket.png';

interface FormProps {
  service: string;
  idForm: number;
}

export function Form(props: FormProps){
  function handlePhoneChange (e: HTMLInputElement){
    var mask = IMask(e, {
      mask: '(00) 00000-0000',
      lazy: false,
    })
  }

  return(
    <Wrapper id="form-contact">
      <img src={ Foguete } alt="Foguete" />

      <div className="container-form">
        <h1>Contrate agora a assessoria da Live Contabilidade e economize tempo e dinheiro na abertura da sua empresa!</h1>

        <p>Preencha seus dados e entraremos em contato rapidamente!</p>

        <form action="https://paginas.rocks/pages/index/661933" method="post">
          <input id="id" name="id" type="hidden" value="661933" />
          <input id="mid" name="mid" type="hidden" value="661933" />
          <input id="pid" name="pid" type="hidden" value={props.idForm} />
          <input id="list_id" name="list_id" type="hidden" value="661933" />
          <input id="provider" name="provider" type="hidden" value="leadlovers" />


          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" placeholder="Seu nome completo" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Seu melhor e-mail" required />
          </div>
          <div>
            <label htmlFor="whatsapp">WhatsApp</label>
            <input type="text" name="phone" id="whatsapp" placeholder="Seu WhatsApp" onChange={e => handlePhoneChange(e.currentTarget)} required />
          </div>

          <input type="hidden" name="message" id="servico" value={props.service} />

          <button type="submit" className="bg-white-900">Solicitar minha proposta</button>

          <input type="hidden" id="source" name="source" value="" />
          <img src={`https://llimages.com/redirect/redirect.aspx?A=V&p=${props.idForm}&m=661933`} style={{display: "none"}} />
        </form>
      </div>
    </Wrapper>
  )
}