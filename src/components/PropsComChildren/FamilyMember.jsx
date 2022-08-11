import React from 'react'

export default (props) => {
    return (
        <React.Fragment>
            <p>{props.nome} {props.sobrenome}</p>
            <p>Este tipo de componente, conhecido como "componente filho", é o que recebe as props</p>
        </React.Fragment>
    )
}
