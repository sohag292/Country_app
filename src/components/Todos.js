import React from 'react'
import Todo from './Todo';

export default function Todos(props) {
    console.log(props.todos);
  return (
    <div>
        
        {
            props.todos.map((todo, index)=>(
                <Todo key={index} todo={todo}></Todo>
            ))
         
        }
    </div>
  )
}
