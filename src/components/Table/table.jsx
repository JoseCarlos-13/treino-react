import React from 'react'
import './Tab.css'

let produtos = [
  { id: 0, produto: "mostarda", preço: 15.99 },
  { id: 1, produto: "maionese", preço: 10.05 },
  { id: 2, produto: "ketchup", preço: 9.55 },
  { id: 3, produto: "molho barbecue", preço: 10.22 }
]

let tab = produtos.map((prod, i) => {
  return <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.produto}</td>
          <td>R${prod.preço.toFixed(2).replace('.', ',')}</td>
        </tr>
})

export default () => {
  return (
    <div>
      <table className="tab">
        <thead>
          <tr>
            <th><b>ID</b></th>
            <th><b>Produto</b></th>
            <th><b>Preço</b></th>
          </tr>
        </thead>
        <tbody>
            {tab}
        </tbody>
      </table>
    </div>
  )
}