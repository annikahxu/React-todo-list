import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, todo}) => {
    const [value, setValue] = useState(todo.task) /* default value is value of task that was already there (since it must be defined already for user to edit) */
    const [date, setDate] = useState(todo.date)

    const handleSubmit = e => {
        e.preventDefault(); /* stops page from reloading every time new todo submitted */

        /* testing console.log(value) */
        editTodo(value, date, todo.id);

        /* clears form after submitting */
        setValue("");
        setDate("");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit} /* handleSubmit captures value of state when form submitted */ >
        <span className='date-input-container'>
            {/* <FontAwesomeIcon icon={faCalendarDay} className="fa-solid" /> */}
            <input type="date" className="todo-date" value={date} onChange={(e) => setDate(e.target.value)} ></input>
        </span>
        <input type="text" className='todo-input' value={value} placeholder='Update Task'
        /* onChange={(e) => console.log(e.target.value)}  - here onChange calls arrow function when input field changed */
        onChange={(e) => setValue(e.target.value)}/> 
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}