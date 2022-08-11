import React from 'react'
import componenteFilhoImagem from './assets/componente_filho.png'

export default (props) => {
  return (
    <React.Fragment>
      <p> Aqui no componente filho, através do parâmetro "props" passado na função principal do componente,
          eu posso acessar os atributos que ele recebeu do componente pai.
      </p>

			<img src={componenteFilhoImagem} alt="componente filho" width={450} height={200} />

      <p>nome: {props.nome} - idade: {props.idade}</p>
    </React.Fragment>
  )
}
