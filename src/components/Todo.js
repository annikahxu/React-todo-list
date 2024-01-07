import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/* displays todos that we've added */

export const Todo = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo' >
        {/* example usage
        <p> go to school </p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrash} />
        </div> */}
        <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? 'completed':""}`}> {todo.task} </p> {/* curly braces used to embed js expression */}
        {/*
        Notes:
        ${} used to embed js in string
        ` backticks (template literals) support string interpolation (embedding expressions in strings) + multiline while regular quotes ' " (string literals) do not
        todo.completed ? 'completed' : "" is concise way to write conditional to check if todo completed (ternary operator)
        - if completed sets class to 'completed'
        - else sets class to empty string
        overall, applies CSS class 'completed' to an element if todo.completed is true (since we are changing className)
        */}
        <div>
            <p className="date-text"> Due: {todo.date} </p>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)} className="fa-solid"/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} className="fa-solid" />
        </div> 
    </div>
  )
}
