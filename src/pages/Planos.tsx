import { Helmet } from "react-helmet";
import { Button } from "../components/Button";
import { ButtonUp } from "../components/ButtonUp";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Imagem } from "../components/Imagem";
import { Legend } from "../components/Legend";
import { Menu } from "../components/Menu";
import { PlansCard } from "../components/PlansCard";
import { Questions } from "../components/Questions";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { WhatsApp } from "../components/WhatsApp";
import { Wrapper } from "../components/Wrapper";
import { WrapperCol } from "../components/WrapperCol";

export function Planos(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade que cabe no seu bolso</title>
        <meta name="description" content="Live Contabilidade - Conheça nossos planos e encontre uma solução que se encaixa perfeitamente às suas necessidades!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/planos" />
        <meta property="og:description" content="Live Contabilidade - Conheça nossos planos e encontre uma solução que se encaixa perfeitamente às suas necessidades!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/planos" />
      </Helmet>

      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero" className="col-full">
        <WrapperCol className="col-full-a">
          <Title>Conheça nossos planos e <Legend>encontre uma solução</Legend> que se encaixa perfeitamente às suas necessidades!</Title>
        </WrapperCol>
      </Wrapper>

      <PlansCard />

      <Wrapper>
        <WrapperCol className="col-a">
          <Imagem className="mb-24" src="/img/Planos1.png" alt="empresario-feliz-pois-encontrou-uma-contabilidade-que-irá-lhe-ajudar" />
        </WrapperCol>
        <WrapperCol className="col-b">
          <Title>Sabe o quanto nós confiamos no nosso trabalho? Você pode <Legend>sair a qualquer momento...</Legend> mas não vai querer!</Title>

          <Text>Experimente ter sua contabilidade transformada pela Live <Legend>com risco zero!</Legend></Text>
          <Text>Acha que não é para você? Não tem problema, <Legend>não temos multa ou fidelidade.</Legend> Você é livre como merece ser!</Text>

          <Button url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Quero%20a%20Live%20como%20minha%20parceira!" className="bg-orange-900">Quero a Live como minha parceira!</Button>
        </WrapperCol>
      </Wrapper>
      
      <Form service="Planos" idForm={21262039} />
      <Questions />
    </>
  )
}