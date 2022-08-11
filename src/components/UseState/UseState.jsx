import React, { useState, useEffect } from 'react'

export default () => {

  const [user, writeUser] = useState({
    name: '',
    email: ''
  })

  const inputting = (e) => {
    writeUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  
  useEffect(() => {
    console.log("Plataforma Udemy")
  }, [user.name])

  return (
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          name="name" 
          value={user.name} 
          onChange={inputting}/>

        <label>Email: </label>
        <input 
          type="text" 
          name="email" 
          value={user.email} 
          onChange={inputting}/>
      </div>
  )
}