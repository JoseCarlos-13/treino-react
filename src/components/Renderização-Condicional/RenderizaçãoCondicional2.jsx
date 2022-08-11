import React from 'react'
import If, { Else } from './If'

export default (props) => {
  return (
    <div>
      <If test={props.usuário.nome}>
        <span>Ferris</span>
        <Else>
          <span>Bueller</span>
        </Else>
      </If>
    </div>
  )
}