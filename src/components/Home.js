import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo';
const dummytodo = ["todo1", "todo2"]
export default function Home() {

    const [todos, setTodos] = useState(dummytodo)
    
    const handleNewtodo =(newtodo)=>{
        setTodos([...todos, newtodo])
    }
  return (
    <div>
        <NewTodo ontodo={handleNewtodo}></NewTodo>
        <Todos todos={todos} ></Todos>
    </div>
  )
}
