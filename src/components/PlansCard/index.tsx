import { ChartLine, Check, Rocket, Storefront, X } from "phosphor-react";
import { Button } from "../Button";
import { Legend } from "../Legend";
import { Wrapper } from "../Wrapper";

import './style.css'

export function PlansCard(){
  return(
    <Wrapper id="plans">
      <div className="cards-plans">
        <div className="card">
          <div className="title">
            <Storefront size={40}/>
            <h2>Básico</h2>
          </div>

          <ul>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Faturamento até <strong>100K/mês</strong></span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Contabilidade Digital</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Todas as obrigações da empresa*</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Envio dos impostos mensais</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Suporte Online</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Banco Digital</span>
            </li>
            <li>
              <div className="no-check">
                <X size={32} weight="bold" />
              </div>
              <span>Sistema de gestão financeira</span>
            </li>
            <li>
              <div className="no-check">
                <X size={32} weight="bold" />
              </div>
              <span>Pró-labore de 2 sócios</span>
            </li>
            <li>
              <div className="no-check">
                <X size={32} weight="bold" />
              </div>
              <span>Suporte nos Lançamentos Financeiros</span>
            </li>
          </ul>

          <Button url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Me%20interessei%20pelo%20plano%20b%C3%A1sico%2C%20pode%20me%20ajudar%3F" className="bg-orange-900">Quero esse!</Button>
        </div>

        <div className="card bold">
          <div className="title">
            <ChartLine size={40} weight="bold" />
            <h2><Legend>Intermediário</Legend></h2>
          </div>

          <ul>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Faturamento até <strong>200K/mês</strong></span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Contabilidade Digital</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Todas as obrigações da empresa*</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Envio dos impostos mensais</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Suporte Online</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Banco Digital</span>
            </li>
            <li>
              <div className="no-check">
                <X size={32} weight="bold" />
              </div>
              <span>Sistema de gestão financeira</span>
            </li>
            <li>
              <div className="no-check">
                <X size={32} weight="bold" />
              </div>
              <span>Pró-labore de 2 sócios</span>
            </li>
            <li>
              <div className="no-check">
                <X size={32} weight="bold" />
              </div>
              <span>Suporte nos Lançamentos Financeiros</span>
            </li>
          </ul>

          <Button url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Me%20interessei%20pelo%20plano%20intermedi%C3%A1rio%2C%20pode%20me%20ajudar%3F" className="bg-orange-900">Quero esse!</Button>
        </div>

        <div className="card">
          <div className="title">
            <Rocket size={40} weight="bold" />
            <h2>Premium</h2>
          </div>

          <ul>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Faturamento até <strong>400K/mês</strong></span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Contabilidade Digital</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Todas as obrigações da empresa*</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Envio dos impostos mensais</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Suporte Online</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Banco Digital</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Sistema de gestão financeira</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Pró-labore de 2 sócios</span>
            </li>
            <li>
              <div className="check">
                <Check size={32} weight="bold" />
              </div>
              <span>Suporte nos Lançamentos Financeiros</span>
            </li>
          </ul>

          <Button url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Me%20interessei%20pelo%20plano%20premium%2C%20pode%20me%20ajudar%3F" className="bg-orange-900">Quero esse!</Button>
        </div>
      </div>
    </Wrapper>
  )
}