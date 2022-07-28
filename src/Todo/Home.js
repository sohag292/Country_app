import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'
export default function Home() {
    const [todos, setTodoS] = useState([]);

        const handleAddTodo =(todo)=>{
            setTodoS((prevTodos)=>{
                return [...prevTodos, {id: uuidv4(), todo}]
            })
            console.log(todos);
    }
    const handleRemoveTodo=(id)=>{
        const filteredTodos = todos.filter((todo)=>todo.id !==id);
        setTodoS(filteredTodos)
    }

  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}></NewTodo>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}></Todos>
        <button className={style.btn}onClick={() => setTodoS([])}> Clear All todos</button>
    </div>
  )
}
