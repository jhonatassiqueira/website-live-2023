import { Helmet } from "react-helmet";
import { Advantages } from "../components/Advantages";
import { Button } from "../components/Button";
import { ButtonUp } from "../components/ButtonUp";
import { Depositions } from "../components/Depositions";
import { Form } from "../components/Form";
import { Imagem } from "../components/Imagem";
import { Legend } from "../components/Legend";
import { SubTitle } from "../components/SubTitle";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { WhatsApp } from "../components/WhatsApp";
import { Wrapper } from "../components/Wrapper";
import { WrapperCol } from "../components/WrapperCol";

export function Representante(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade para Representante Comercial</title>
        <meta name="description" content="Live Contabilidade - Feita para você Representante Comercial que quer aumentar as suas vendas, economizar tempo e pagar menos imposto!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/representante-comercial" />
        <meta property="og:description" content="Live Contabilidade - Feita para você Representante Comercial que quer aumentar as suas vendas, economizar tempo e pagar menos imposto!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/representante-comercial" />
      </Helmet>

      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero">
        <WrapperCol className="col-a">
          <Title><Legend>Representante Comercial,</Legend> escale suas vendas, economize tempo e <Legend>pague menos imposto!</Legend></Title>
          <SubTitle>Nós da Live Contabilidade temos uma equipe especializada para atender pessoas iguais a você! Você vai se surpreender com <Legend>o tempo e dinheiro que vai economizar!</Legend></SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero crescer meu faturamento!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-46" src="/img/Representante1.png" alt="duas-pessoas-se-cumprimentando" />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-b">
          <Title>A Live Contabilidade será <Legend>a maior aliada do seu negócio!</Legend></Title>
          <Text>Temos profissionais com mais de 10 anos de experiência em atendimento a representantes comerciais, já tratamos com operações de todo tamanho. <Legend>Estamos preparados para atender você!</Legend></Text>
          <Text>Descubra como uma contabilidade feita do jeito certo pode <Legend>impactar e muito suas vendas e seu faturamento.</Legend></Text>
          <Text>Com mais tempo e dinheiro no bolso, suas <Legend>vendas vão decolar!</Legend></Text>

          <Button url="#form-contact" className="bg-orange-900">Quero crescer meu faturamento!</Button>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Imagem className="mt-24" src="/img/Representante2.png" alt="duas-pessoas-fechando-negocio-e-assinando-contrato" />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-b">
          <Imagem className="mt-46 mb-64" src="/img/Home3.png" alt="mulher-negra-fazendo-os-calculos" />
        </WrapperCol>
        <WrapperCol className="col-a">
          <Title><Legend>Nunca mais</Legend> a sua contabilidade vai te dar dor de cabeça</Title>
          <Text>Envio de impostos, cálculos intermináveis, burocracias com os órgãos públicos...</Text>
          <Text><Legend>Nunca mais se preocupe com nada disso!</Legend></Text>
          <Text>Se torne parceiro da Live Contabilidade e <Legend>veja como irá te sobrar mais tempo e dinheiro.</Legend></Text>
          <Text>Você faz o que sabe fazer de melhor: vender! O resto, deixe conosco, que nossa equipe tomar conta!</Text>

          <Button url="#form-contact" className="bg-orange-900">Quero crescer meu faturamento!</Button>
        </WrapperCol>

      </Wrapper>

      <Advantages />
      <Depositions url="#form-contact" callToAction="Quero crescer meu faturamento!" />
      <Form service="Representante Comercial" idForm={21262014} />
    </>
  )
}