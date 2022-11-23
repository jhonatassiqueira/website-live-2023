import { Helmet } from "react-helmet";
import { Advantages } from "../components/Advantages";
import { Button } from "../components/Button";
import { ButtonUp } from "../components/ButtonUp";
import { Depositions } from "../components/Depositions";
import { Form } from "../components/Form";
import { Imagem } from "../components/Imagem";
import { Legend } from "../components/Legend";
import { Questions } from "../components/Questions";
import { SubTitle } from "../components/SubTitle";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { WhatsApp } from "../components/WhatsApp";
import { Wrapper } from "../components/Wrapper";
import { WrapperCol } from "../components/WrapperCol";

export function Ecommerce(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade para E-commerce</title>
        <meta name="description" content="Live Contabilidade - A contabilidade ideal para o seu negócio digital!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/ecommerce" />
        <meta property="og:description" content="Live Contabilidade - A contabilidade ideal para o seu negócio digital!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/ecommerce" />
      </Helmet>

      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero">
        <WrapperCol className="col-a">
          <Title>Live Contabilidade: <Legend>a parceira</Legend> estratégica <Legend>do seu E-commerce</Legend></Title>
          <SubTitle>Com 10 anos de experiência, nossa <Legend>equipe especializada em negócios digitais</Legend> vai te atender com excelência!</SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero crescer meu E-commerce!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-46" src="./src/img/Ecommerce1.png" alt="pessoas-comprando-seus-produtos-na-loja-online" />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-b">
          <Title>Conte com a inteligência de 10 anos de mercado <Legend>atendendo dezenas de E-commerces.</Legend></Title>
          <Text>Temos uma equipe de <Legend>especialistas que já atendeu mais de 30 E-commerces,</Legend> desde a regularização do CNPJ até o suporte do dia a dia, como envio de impostos e geração de notas fiscais.</Text>
          <Text>Você terá acesso à toda a inteligência que já adquirimos nestes 10 anos. Assim, terá a segurança e a certeza de que <Legend>estaremos tomando as melhores decisões!</Legend></Text>

          <Button url="#form-contact" className="bg-orange-900">Quero crescer meu E-commerce!</Button>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Imagem className="mt-24" src="./src/img/Ecommerce2.png" alt="mulher-de-negocio-analisando-sua-evolucao-nas-vendas" />
        </WrapperCol>
        

      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Title>Finalmente irá sobrar tempo para focar no que você sabe fazer melhor: gerir seu negócio!</Title>
          <Text>Envio de impostos, cálculos intermináveis, burocracias com os órgãos públicos...</Text>
          <Text><Legend>Nunca mais se preocupe com nada disso!</Legend></Text>
          <Text>Se torne parceiro da Live Contabilidade e <Legend>veja como irá te sobrar mais tempo e dinheiro.</Legend></Text>
          <Text>Você faz o que sabe fazer de melhor: cuidar do seu negócio. O resto, deixe conosco, que nossa equipe irá executar!</Text>

          <Button url="#form-contact" className="bg-orange-900">Quero crescer meu E-commerce!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-24" src="./src/img/Ecommerce3.png" alt="mulher-sentada-finalizando-as-suas-compras-pelo-aplicativo" />
        </WrapperCol>
        
      </Wrapper>

      <Advantages />
      <Depositions url="#form-contact" callToAction="Quero crescer meu E-commerce!" />
      <Form service="E-commerce" idForm={21262003} />
      <Questions />
    </>
  )
}