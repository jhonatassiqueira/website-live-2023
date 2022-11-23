import { ButtonUp } from "../components/ButtonUp";
import { DataCompany } from "../components/DataCompany";
import { WhatsApp } from "../components/WhatsApp";

export function Contato(){
  return(
    <>
      <WhatsApp url="https://api.whatsapp.com/send?phone=5511961485582&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20contador!" />
      <ButtonUp />
      
      <DataCompany />
      
    </>
  )
}