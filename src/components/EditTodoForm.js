import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, todo}) => {
    const [value, setValue] = useState(todo.task) /* default value is value of task that was already there (since it must be defined already for user to edit) */

    const handleSubmit = e => {
        e.preventDefault(); /* stops page from reloading every time new todo submitted */

        /* testing console.log(value) */
        editTodo(value, todo.id);

        /* clears form after submitting */
        setValue("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit} /* handleSubmit captures value of state when form submitted */ >
        <input type="text" className='todo-input' value={value} placeholder='Update Task'
        /* onChange={(e) => console.log(e.target.value)}  - here onChange calls arrow function when input field changed */
        onChange={(e) => setValue(e.target.value)}/> 
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}