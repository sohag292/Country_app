import React from 'react'
import Todo from './Todo';
import styel from './todos.module.css'

export default function Todos(props) {
  
   
  return (
    <section className={styel.todos}>
        {
            props.todos.map((todo)=>{
                return(
                    <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveItem={props.onRemoveTodo}></Todo>
                ) 
            })
        }
    </section>
  )
}
