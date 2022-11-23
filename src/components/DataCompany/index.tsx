import { Form } from "../Form";
import { Text } from "../Text";
import { Title } from "../Title";
import { Wrapper } from "../Wrapper";
import { WrapperCol } from "../WrapperCol";

import './style.css'

export function DataCompany(){
  return(
    <div className="contact-container">
      <Form service="Contato" idForm={21261400} />

      <Wrapper className="col-full">
        <WrapperCol className="col-full-a">
          <Title>Live Contabilidade Ltda</Title>
          <Text><strong>Email:</strong> comercial@livecontabilidade.com.br</Text>
          <Text><strong>WhatsApp (horário comercial):</strong> (11) 96148-5582</Text>
          <Text><strong>Endereço:</strong> Alameda Tangará, 80, Sala 405B, Bosque do Vianna, Cotia - SP, 06711020</Text>
          <Text><strong>CNPJ:</strong> 35.772.374/0001-00</Text>
          <Text><strong>Registro CRC:</strong> 2SP044130/O-9</Text>
          <Text><strong>Responsável Técnico:</strong> David de Souza França 1SP310446/O-7</Text>
        </WrapperCol>
        
      </Wrapper> 
    </div>
  )
}