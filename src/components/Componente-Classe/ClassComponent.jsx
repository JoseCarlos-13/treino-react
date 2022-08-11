import React from 'react'

const par = {
    color: 'red',
    textShadow: '1px 2px 1px black'
}

export default class Ccomponent extends React.Component {
    state={
        numero: 0
    }

    handleClick = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render(){
        return (
            <div>
                <p style={par}>{this.props.nome}</p>
                <h3>{this.state.numero}</h3>
                <button onClick={this.handleClick}>Mais</button>
            </div>
        )
    }
}