import { Check } from 'phosphor-react'
import { ReactNode } from 'react';
import './style.css'


interface ListCheckProps {
  children: ReactNode;
}

function ListCheck(props: ListCheckProps){
  return(
    <ul className='list-check-aperture'>{props.children}</ul>
  )
}

interface ItemProps {
  text: string;
}

function Item(props: ItemProps){
  return(
    <li>
      <Check size={24}/>
      <span>{props.text}</span>
    </li>
  )
}

export const List = {
  List: ListCheck,
  Item: Item
}