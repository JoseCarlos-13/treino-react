import React from 'react'
import ComponenteFilho from './ComponenteFilho'
import componentePaiImagem from './assets/componente_pai.png'

export default () => {
	return (
		<React.Fragment>
			<p>	Aqui no componente pai, eu passo atributos para o componente filho. Nesse exemplo,
					os atributos que estou passando para o componente filho são "nome" e "idade".
			</p>

			<img src={componentePaiImagem} alt="componente pai" width={450} height={200} />

			<ComponenteFilho nome="Default" idade={20}/>
		</React.Fragment>
	)
}
