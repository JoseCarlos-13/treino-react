import React from 'react'

export default props => {
    return (
        <React.Fragment>
            Filho
            <button onClick={() => props.passagemDados("joao", 20, "queijo")}>Gerar Dados</button>
        </React.Fragment>
    )
}