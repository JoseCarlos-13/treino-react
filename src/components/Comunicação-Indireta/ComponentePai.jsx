import React from 'react'
import ComponenteFilho from "./ComponenteFilho"

export default () => {
    function passagemDados (nome, idade, fato){
        let name = nome
        let age = idade
        let fact = fato
        console.log(name, age, fact)
    }

    return (
        <React.Fragment>
            Pai
            <ComponenteFilho 
                passagemDados={passagemDados} />
        </React.Fragment>
    )
}