import React from 'react'
import { Link } from 'react-router-dom'
import './Aside.css'

let r = [
  { to: "/", name: 'Componente Classe' },
  { to: "/state", name: 'Use State' },
  { to: "/randomnumber", name: 'Número Aleatório' },
  { to: "/fragment", name: 'React Fragment' },
  { to: "/repetition", name: 'Repetição' },
  { to: "/tab", name: 'Tabela' },
  { to: "/direct-comunication", name: 'Comunicação Direta'  }
]

let routeList = r.map((route) => {
  return (
      <li key={route.to}>
        <Link to={route.to}><i>{route.name}</i></Link>
      </li>
    )
})

export default () => {
	return (
		<>
			<aside id="aside">
        <h1>Rotas</h1>
				<ul id="router-list">
          {routeList}
				</ul>
			</aside>
		</>
	)
}
