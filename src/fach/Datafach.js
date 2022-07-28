// import React, { useEffect, useState } from 'react'
// export default function Datafach() {
//     const [todos, setTodos] = useState(null);
//     const [isLoading, setIsLoading]= useState(true);
//     const [error, setError]= useState(null);

//  useEffect(()=>{
//     setTimeout(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res)=>{
//             if(!res.ok){
//                 throw Error("Data is failed")
//             }else{

//                 return res.json();
//             }
//         })
//         .then((data)=>{
//             setTodos(data);
//             setIsLoading(false);
//             setError(null);
//         })
//         .catch((error)=>{
//             setError(error.message)
//             setIsLoading(false);
//         })
//     }, 2000);
//  }, [])
//  const LoadingMassage = <p> Data is loading....</p>;
//  const displayError = <p>{error}</p>;

// const todosElements = todos && todos.map((todo, index)=>{
//     return <p key={index}>{todo.title}</p>
// })
//   return (
//     <div>
//         <h1>Todo</h1>
//         {error && displayError }
//     {isLoading && LoadingMassage}
//         {todosElements}
//     </div>
//   )
// }

import useFetch from './useFetch';

export default function Datafach() {
    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos")
 const LoadingMassage = <p> Data is loading....</p>;
 const displayError = <p>{error}</p>;

const todosElements = data && data.map((todo, index)=>{
    return <p key={index}>{todo.title}</p>
})
  return (
    <div>
        <h1>Todo</h1>
        {error && displayError }
    {isLoading && LoadingMassage}
        {todosElements}
    </div>
  )
}