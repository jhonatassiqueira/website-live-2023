import { Helmet } from "react-helmet";
import { Button } from "../components/Button";
import { ButtonUp } from "../components/ButtonUp";
import { CostEmployeeAll } from "../components/CostEmployeeAll";
import { Depositions } from "../components/Depositions";
import { Form } from "../components/Form";
import { Imagem } from "../components/Imagem";
import { IncludesFinance } from "../components/IncludesFinance";
import { Legend } from "../components/Legend";
import { List } from "../components/ListCheck";
import { ListCostEmployee } from "../components/ListCostEmployee";
import { PhraseCallToAction } from "../components/PhraseCallToAction";
import { Questions } from "../components/Questions";
import { StepByStepFinance } from "../components/StepByStepFinance";
import { SubTitle } from "../components/SubTitle";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { WhatsApp } from "../components/WhatsApp";
import { Wrapper } from "../components/Wrapper";
import { WrapperCol } from "../components/WrapperCol";

import Bpo1 from '../img/Bpo1.png';
import Bpo2 from '../img/Bpo2.png';
import Bpo3 from '../img/Bpo3.png';
import Bpo4 from '../img/Bpo4.png';
import Bpo5 from '../img/Bpo5.png';
import Bpo6 from '../img/Bpo6.png';
import Bpo7 from '../img/Bpo7.png';

export function BpoFinanceiro(){
  return(
    <>
      <Helmet>
        <title>Live Contabilidade terceirizando o financeiro da sua empresa!</title>
        <meta name="description" content="Live Contabilidade terceirizando o financeiro da sua empresa!" />
        <link rel="canonical" href="https://www.livecontabilidade.com.br/bpo-financeiro" />
        <meta property="og:description" content="Live Contabilidade terceirizando o financeiro da sua empresa!" />
        <meta property="og:url" content="https://www.livecontabilidade.com.br/bpo-financeiro" />
      </Helmet>
    
      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <Wrapper id="hero">
        <WrapperCol className="col-b">  
          <Title>BPO Financeiro: a maneira mais <Legend>simples</Legend> e <Legend>barata</Legend> de organizar o financeiro da sua empresa!</Title>
          <SubTitle>Chega de fazer tudo sozinho ou pagar caro por uma equipe de financeiro na sua empresa: <Legend>a Live vai te ajudar melhor e mais barato!</Legend></SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero Terceirizar meu Financeiro</Button>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Imagem src={ Bpo1 } alt="mulher-sorrindo-e-segurando-o-notebook"/>
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-b">
          <Imagem className="mb-24" src={ Bpo2 } alt="empresario-preocupado-com-a-desorganizacao-dos-documentos"/>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Title>A falta de controle est?? te custando <Legend>tempo e dinheiro</Legend></Title>
          <Text>Assim como todo empres??rio, seu tempo vale ouro!</Text>
          <Text>Ao deixar de tomar decis??es estrat??gicas na gest??o do seu neg??cio para controlar o financeiro, voc?? est?? jogando tempo e dinheiro no lixo.</Text>
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Imagem className="mb-24" src={ Bpo3 } alt="contador-colocando-as-contas-em-dia"/>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Title>A Receita Federal <Legend>est?? de olho em tudo!</Legend></Title>
          <SubTitle>Al??m de gastar tempo e dinheiro, ?? necess??rio <Legend>muito conhecimento</Legend> para controlar o financeiro de uma empresa da forma correta!</SubTitle>

          <List.List>
            <List.Item text="Controle de Contas a Receber" />
            <List.Item text="Controle de Contas a Pagar" />
            <List.Item text="Emiss??o de Nota Fiscal" />
            <List.Item text="Emiss??o de Boletos" />
            <List.Item text="Controle de Contas Banc??rias" />
            <List.Item text="Agendamento de Contas a Pagar" />
          </List.List>

          <SubTitle><Legend>Uma hora voc?? vai cometer algum erro...</Legend> e a Receita Federal estar?? l?? para punir qualquer falta de controle e conhecimento!</SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero Terceirizar meu Financeiro</Button>
        </WrapperCol>

      </Wrapper>

      <PhraseCallToAction text="Empres??rio, fazer o papel do seu Financeiro ?? a pior sa??da!" />

      <Wrapper>
        <WrapperCol className="col-b">
          <Imagem className="mb-24" src={ Bpo4 } alt="mao-segurando-as-pe??as-do-domin??"/>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Title>Pensou em contratar algum funcion??rio para isto? <Legend>Cuidado!</Legend></Title>

          <Text>J?? que eu n??o deveria fazer o papel do meu financeiro, vou contratar algu??m para esta fun????o, certo? <Legend>Errado!</Legend></Text>
          <Text>Contratar um funcion??rio vai fazer sua empresa:</Text><br />

          <ListCostEmployee />
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Imagem className="mb-24" src={ Bpo5 } alt="duas-maos-segurando-o-contrato"/>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Title>A <Legend>melhor solu????o poss??vel</Legend> para sua empresa hoje ?? o <Legend>BPO Financeiro</Legend></Title>
          <SubTitle>O BPO Financeiro ?? a <Legend>terceiriza????o</Legend> do financeiro da sua empresa!</SubTitle>

          <Button url="#form-contact" className="bg-orange-900">Quero Terceirizar meu Financeiro</Button>
        </WrapperCol>
      </Wrapper>

      <StepByStepFinance />

      <Wrapper>
        <WrapperCol className="col-b">
          <Imagem className="mb-24" src={ Bpo6 } alt="moedas-plantadas-como-investimento"/>
        </WrapperCol>
        <WrapperCol className="col-a">
          <Title><Legend>Terceirizar</Legend> seu financeiro ?? de longe a <Legend>solu????o mais barata!</Legend></Title>
          <SubTitle>Esque??a todos aqueles <Legend>custos de contratar</Legend> um empregado:</SubTitle>

          <CostEmployeeAll />

          <SubTitle>Por um <Legend>valor ??nico e muito menor</Legend> do que o custo de um empregado, a equipe da Live vai cuidar do seu financeiro como se fosse o nosso!</SubTitle>
        </WrapperCol>
      </Wrapper>

      <Wrapper>
        <WrapperCol className="col-a">
          <Imagem className="mb-24" src={ Bpo7 } alt="duas-pessoas-apertando-as-maos-por-ter-fechado-contrato"/>
        </WrapperCol>
        <WrapperCol className="col-b">
          <Title>Aproveite nossos <Legend>15 anos de mercado</Legend> e n??o se preocupe com rotatividade e cursos</Title>

          <Text>S??o 15 anos atuando em centenas de empresas, melhorando os nossos processos e nosso atendimento com o feedback de diversos clientes.</Text>
          <Text>Nenhum funcion??rio que voc?? contratar proporcionar?? a qualidade que traremos para o financeiro do seu neg??cio!</Text>

          <Text><Legend>?? menos custo e mais qualidade!</Legend></Text>

          <Button url="#form-contact" className="bg-orange-900">Quero Terceirizar meu Financeiro</Button>
        </WrapperCol>
      </Wrapper>

      <Depositions url="#form-contact" callToAction="Quero Terceirizar meu Financeiro" />
      <IncludesFinance />
      <Form service="BPO Financeiro" idForm={21262033} />
      <Questions />
    </>
  )
}