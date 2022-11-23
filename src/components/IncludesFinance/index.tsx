import { Bank, Barcode, Calendar, CheckCircle, CreditCard, FileText } from "phosphor-react";
import { Button } from "../Button";
import { Title } from "../Title";
import { Wrapper } from "../Wrapper";

import './style.css';

export function IncludesFinance(){
  return(
    <Wrapper id="includes-finance">
      <Title>O que está incluso?</Title>

      <div className="list-options">
        <div className="option">
          <CheckCircle size={32} />
          <p>Controle de Contas a Receber</p>
        </div>
        <div className="option">
          <CreditCard size={32} />
          <p>Controle de Contas a Pagar</p>
        </div>
        <div className="option">
          <FileText size={32} />
          <p>Emissão de Nota Fiscal</p>
        </div>
        <div className="option">
          <Barcode size={32} />
          <p>Emissão de Boletos</p>
        </div>
        <div className="option">
          <Bank size={32} />
          <p>Controle de Contas Bancárias</p>
        </div>
        <div className="option">
          <Calendar size={32} />
          <p>Agêndamento de Contas a Pagar</p>
        </div>
      </div>

      <Button url="#form-contact" className="bg-orange-900">Quero Terceirizar meu Financeiro</Button>
    </Wrapper>
  )
}