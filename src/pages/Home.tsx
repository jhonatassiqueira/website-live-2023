import { Helmet } from "react-helmet";
import { Button } from "../components/Button";
import { ButtonUp } from "../components/ButtonUp";
import { Depositions } from "../components/Depositions";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Imagem } from "../components/Imagem";
import { Legend } from "../components/Legend";
import { Menu } from "../components/Menu";
import { Questions } from "../components/Questions";
import { Services } from "../components/Services";
import { SubTitle } from "../components/SubTitle";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { WhatsApp } from "../components/WhatsApp";
import { Wrapper } from "../components/Wrapper";
import { WrapperCol } from "../components/WrapperCol";

import Home1 from '../img/Home1.png';
import Home2 from '../img/Home2.png';
import Home3 from '../img/Home3.png';

export function Home(){
  return(
    <>
      <Helmet>
        <meta name="description" content="Live Contabilidade - A contabilidade digital para o seu negócio!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/" />
        <meta property="og:description" content="Live Contabilidade - A contabilidade digital para o seu negócio!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/" />
      </Helmet>
      
      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero">
        <WrapperCol className="col-a">
          <Title>Simples, leve e estratégica!</Title>
          <SubTitle>Com <Legend>atendimento humanizado</Legend> e uma equipe de especialistas!</SubTitle>

          <Button url="/abertura-empresa" className="bg-orange-900">Quero abrir minha empresa!</Button>
          <Button url="#form-contact" className="bg-orange-900">Trocar de contador!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-46" src={ Home1 } alt="pessoas-conversando-e-analisando-calendario" />
        </WrapperCol>


      </Wrapper>

      <Services />
      
      <Wrapper>
        <WrapperCol className="col-a">
          <Title>Contabilidade da forma certa: uma <Legend>arma poderosa</Legend> para o seu negócio!</Title>
          <Text>Para muitos, impostos e burocracia se tornam um problema cada vez maior.</Text>
          <Text>Ao ser nosso parceiro, além de não ter este problema, isto será <Legend>utilizado em seu favor!</Legend></Text>
          <Text>Nossa equipe de especialistas com <Legend>mais de 10 anos de experiência</Legend> irá avaliar cada detalhe do seu negócio, e de forma personalizada e humanizada, vamos encontrar todas as formas possíveis de <Legend>economizar tempo e dinheiro.</Legend></Text>
          <Text>Você vai ver como a contabilidade pode ser tornar <Legend>a maior aliada do seu negócio!</Legend></Text>

          <Button url="#form-contact" className="bg-orange-900">Quero a Contabilidade dos sonhos!</Button>
        </WrapperCol>

        <WrapperCol className="col-b">
          <Imagem className="mt-24" src={ Home2 } alt="pessoas-trabalhando-e-vendo-a-evolucao-do-faturamento" />
        </WrapperCol>

      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Imagem className="mt-46 mb-64" src={ Home3 } alt="mulher-negra-fazendo-os-calculos" />
        </WrapperCol>
        <WrapperCol className="col-b">
          <Title><Legend>Nunca mais</Legend> a sua contabilidade vai te dar dor de cabeça!</Title>
          <Text>Envio de impostos, cálculos intermináveis, burocracias com os órgãos públicos...</Text>
          <Text><Legend>Nunca mais se preocupe</Legend> com nada disso!</Text>
          <Text>Se torne parceiro da Live Contabilidade e veja como irá te <Legend>sobrar mais tempo e dinheiro.</Legend></Text>
          <Text>Você faz o que sabe fazer de melhor: cuidar do seu negócio. O resto, deixe conosco, que <Legend>nossa equipe irá executar!</Legend></Text>

          <Button url="#form-contact" className="bg-orange-900">Quero a Contabilidade dos sonhos!</Button>
        </WrapperCol>


      </Wrapper>

      <Depositions callToAction="Quero a Contabilidade dos sonhos!" url="#form-contact" />
      <Form service="Geral" idForm={21261400} />
      <Questions />
    </>
  )
}