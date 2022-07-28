import React, { useState } from 'react'

export default function NewTodo(props) {
        const [todo, setTodo] = useState("")

    const onHandleChange =(e)=>{
        setTodo(e.target.value)
    }

    const onhandleSubmit =(e)=>{
        props.ontodo(todo)
        e.preventDefault();
        
    }
  return (
   <form  onSubmit={onhandleSubmit}>
    <label htmlFor="todo">New Todo : </label>
    <input type="text" id='todo' name='todo' value={todo} onChange={onHandleChange} />
    <button>Add Todo</button>
   </form>
  )
}
