import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    /* adds todo item to list in todo form (which is called todos)
    variable todo is the value being added 
    used as a property (props) in child component todoform */
    const addTodo = (todo, date) => {
        if(todo===""){
            console.log("no task entered")
        }else{
            /* ...todos copies existing elements of todos array and includes in new array being created
            id: uuidv4 generates unique identifier so each task can be identified
            task: todo sets tasks's description
            completed, isEditing are booleans which default to false */
            setTodos([...todos, {id: uuidv4(), date: date, task: todo, completed: false, isEditing: false}])
            console.log(todos)
        }

    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id)) /* creates new array containing only elements with todo.id not equal to id */
    }

    const editTodo = id => { /* changes isEditing boolean */
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, date, id) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, task, date, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
        <div>
            <img src={process.env.PUBLIC_URL + '/miffy2.png'} alt="test" className='logo'></img>
        </div>
        <h1>My to-do list</h1>
        <TodoForm addTodo={addTodo} /> {/* attribute addTodo being passed to TodoForm component (prop/property is a function addTodo that adds todo to interface) */}
        {todos.map((todo, index) => ( /* maps instructions below to each element of todos --> basically makes each item into a todo component */
            /* if isEditing true show edit todo form on screen, else display todos */
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} todo={todo} />
            ) : (
                <Todo todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/> 
                /* toggleComplete, deleteTodo, etc. examples of react properties (functions that can be applied on a todo) */
            )
        ))}
        
    </div>
  )
}
