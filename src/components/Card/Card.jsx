import React from 'react'
import './Card.css'

export default (props) => {
  const cardColor = {
    backgroundColor: props.color || "#000"
  }
  return (
    <div className="card" style={cardColor}>
      <div className="title"><h2>{props.title}</h2></div>
      <div className="content">
        <h4>{props.children}</h4>
      </div>
    </div>
  )
}