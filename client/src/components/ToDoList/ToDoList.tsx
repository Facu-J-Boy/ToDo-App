import React from 'react'
import ToDo from '../ToDo/ToDo'

const ToDoList = () => {
  return (
    <div className="flex flex-col items-center">
        <ToDo />
        <ToDo />
    </div>
  )
}

export default ToDoList