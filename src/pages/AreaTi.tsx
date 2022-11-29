import { Button } from "../components/Button";
import { ButtonUp } from "../components/ButtonUp";
import { Imagem } from "../components/Imagem";
import { SubTitle } from "../components/SubTitle";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { WhatsApp } from "../components/WhatsApp";
import { Wrapper } from "../components/Wrapper";
import { Depositions } from "../components/Depositions";
import { Form } from "../components/Form";
import { Legend } from "../components/Legend";
import { Advantages } from "../components/Advantages";
import { WrapperCol } from "../components/WrapperCol";
import { Questions } from "../components/Questions";
import { Helmet } from "react-helmet";

import TI1 from '../img/TI1.png';
import TI2 from '../img/TI2.png';
import TI3 from '../img/TI3.png';

export function AreaTi(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade para TI</title>
        <meta name="description" content="Live Contabilidade - Experimente uma contabilidade moderna, leve e que finalmente te entende!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/area-ti" />
        <meta property="og:description" content="Live Contabilidade - Experimente uma contabilidade moderna, leve e que finalmente te entende!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/area-ti" />
      </Helmet>

      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero">
        <WrapperCol className="col-a">
          <Title>Experimente uma contabilidade moderna, leve e <Legend>que finalmente te entende:</Legend> seja Live!</Title>
          <SubTitle>Use a tecnologia para garantir todos os seu direitos e experimente <Legend>o melhor atendimento do mercado.</Legend> Tudo feito pensando em você, profissional de TI!</SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero a Live como minha parceira!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-46" src={ TI1 } alt="mulher-negra-sentada-analisando-graficos" />
        </WrapperCol>
      </Wrapper>
      
      <Wrapper>
        <WrapperCol className="col-b">
          <Title>Não é qualquer contabilidade. É contabilidade <Legend>especializada em TI!</Legend></Title>
          <Text>Temos profissionais com mais de 10 anos de experiência em atendimento à profissionais de TI, já é tempo suficiente para garantir: você vai amar nosso serviço!</Text>
          <Text>Conte com o nosso suporte personalizado e humanizado, tire dúvidas com um contador de verdade e tenha certeza de que está crescendo no caminho certo!</Text>

          <Button url="#form-contact" className="bg-orange-900">Quero a Live como minha parceira!</Button>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Imagem className="mt-24" src={ TI2 } alt="homem-branco-alegre-trabalhando-no-sofa" />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Title>Tenha uma contabilidade simples e feita <Legend>sob medida para você, Profissional de TI!</Legend></Title>
          <Text>Com outras empresas de contabilidade, você irá passar pelos mesmos processos de todas as empresas.</Text>
          <Text>Aqui na Live Contabilidade, você vai ter a sua contabilidade em dia da maneira <Legend>mais simples possível!</Legend> Nossa equipe especializada em Profissionais de TI vai garantir que você gaste o mínimo de tempo se preocupando com isto, através de <Legend>processos construídos pensado em seu negócio,</Legend> para que possa se dedicar ao máximo aos seus clientes.</Text>
          <Text>Você cresce e nós te acompanhamos!</Text>
          <Button url="#form-contact" className="bg-orange-900">Quero a Live como minha parceira!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-24" src={ TI3 } alt="duas-pessoas-trabalhando-no-escritorio" />
        </WrapperCol>
      </Wrapper>

      <Advantages />
      <Depositions url="#form-contact" callToAction="Quero a Live como minha parceira!" />
      <Form service="Área de TI" idForm={21261522} />
      <Questions />
    </>
  )
}