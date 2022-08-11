import React from 'react'
import { students } from './estudantes'

let repetition = students.map(student => {
  return (
    <li key={student.id}>{student.id}) {student.nome} - {student.nota}</li>
  )
})

const list = {
  listStyle: 'none',
  marginLeft: -50
}

export default () => {
  return(
    <div>
      <ul style={list}>
        {repetition}
      </ul>
    </div>
  )
}
