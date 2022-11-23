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

export function PJ(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade para PJ</title>
        <meta name="description" content="Live Contabilidade - A contabilidade pensada em você Prestador de Serviço!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/prestador-de-servicos" />
        <meta property="og:description" content="Live Contabilidade - A contabilidade pensada em você Prestador de Serviço!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/prestador-de-servicos" />
      </Helmet>
      
      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero">
        <WrapperCol className="col-a">
          <Title>Somos a Live Contabilidade, uma equipe <Legend>especializada em Prestadores de Serviço!</Legend></Title>
          <SubTitle>Tenha sua contabilidade em dia, garanta todos os seu direitos e <Legend>não gaste nenhum centavo a mais!</Legend></SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero a Live como minha parceira!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-46" src="./src/img/PJ1.png" alt="moça-trabalhando-no-notebook" />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-b">
          <Title>Você sabe <Legend>quais são todos os seus direitos</Legend> e como garantir cada um deles? <Legend>Nós sabemos.</Legend></Title>
          <Text>Temos profissionais com mais de 10 anos de experiência em atendimento a <Legend>prestadores de serviço,</Legend> já resolvemos todos os tipos de problemas. Com você, não será diferente!</Text>
          <Text>Conte com o nosso suporte personalizado e humanizado, tire dúvidas com um contador de verdade e <Legend>tenha certeza de que está crescendo no caminho certo!</Legend></Text>

          <Button url="#form-contact" className="bg-orange-900">Quero a Live como minha parceira!</Button>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Imagem className="mt-24" src="./src/img/PJ2.png" alt="equipe-trabalhando-com-suas-ferramentas" />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Title>Tenha uma contabilidade simples e pensada <Legend>especialmente para você, Prestador de Serviço!</Legend></Title>
          <Text>Com outras empresas de contabilidade, você irá passar pelos mesmos processos de todas as empresas.</Text>
          <Text>Aqui na Live Contabilidade, você vai ter a <Legend>sua contabilidade em dia da maneira mais simples possível!</Legend> Nossa equipe especializada em Prestadores de Serviço vai garantir que você gaste o mínimo de tempo se preocupando com isto, através de processos construídos pensado em seu negócio, <Legend>para que possa se dedicar ao máximo aos seus clientes.</Legend></Text>
          <Text>Você cresce e nós te acompanhamos!</Text>

          <Button url="#form-contact" className="bg-orange-900">Quero a Live como minha parceira!</Button>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Imagem className="mt-24" src="./src/img/PJ3.png" alt="mulher-sentada-verificando-suas-ordens-de-servicos" />
        </WrapperCol>
      </Wrapper>

      <Advantages />
      <Depositions url="#form-contact" callToAction="Quero a Live como minha parceira!" />
      <Form service="Prestador de Serviços" idForm={21262008} />
      <Questions />
    </>
  )
}