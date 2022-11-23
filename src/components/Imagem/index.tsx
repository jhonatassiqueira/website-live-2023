import { ImgHTMLAttributes } from "react";

import './style.css'

interface ImagemProps extends ImgHTMLAttributes<HTMLImageElement>{}

export function Imagem(props: ImagemProps){
  return(
    <img {...props} />
  )
}