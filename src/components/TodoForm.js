import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
/* notes on code tutorial for learning

TodoWrapper is parent component

className points to class in style sheet (css)

=> is arrow function expression
- alternative to traditional function expression
- ex. (e) => console.log(e.target.value) same thing as
    (function(e) {
        console.log(e.target.value); });
- target refers to current value of element that triggered the event
*/ 

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [date, setDate] = useState("Unspecified")

    const handleSubmit = e => {
        e.preventDefault(); /* stops page from reloading every time new task submitted */

        /* testing console.log(value) */
        addTodo(value, date);

        /* clears form after submitting */
        setValue("");
        setDate("Unspecified");
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit} /* handleSubmit captures value of state when form submitted */ >
        <span className='date-input-container'>
            {/* <FontAwesomeIcon icon={faCalendarDay} className="fa-solid" /> */}
            <input type="date" className="todo-date" value={date} onChange={(e) => setDate(e.target.value)} ></input>
        </span>
        <input type="text" className='todo-input' value={value} placeholder='What is the task today?'
        /* onChange={(e) => console.log(e.target.value)}  - here onChange calls arrow function when input field changed */
        onChange={(e) => setValue(e.target.value)}/> 
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
