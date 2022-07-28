import React, { useEffect, useState } from 'react'

// export default function useFetch(url) {

//     const [data, setData]= useState(null);

//     // const [todos, setTodos] = useState(null);
//     const [isLoading, setIsLoading]= useState(true);
//     const [error, setError]= useState(null);

    

//  useEffect(()=>{
//     setTimeout(() => {
//         fetch(url)
//         .then((res)=>{
//             if(!res.ok){
//                 throw Error("Data is failed")
//             }else{

//                 return res.json();
//             }
//         })
//         .then((data)=>{
//             setData(data);
//             setIsLoading(false);
//             setError(null);
//         })
//         .catch((error)=>{
//             setError(error.message)
//             setIsLoading(false);
//         })
//     }, 2000);
//  }, [url]);

//  return {data, isLoading, error}
// }


export default function useFetch(url) {
    // const [todos, setTodos] = useState(null);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError]= useState(null);

 useEffect(()=>{
    setTimeout(() => {
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("Data is failed")
            }else{

                return res.json();
            }
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message)
            setIsLoading(false);
        })
    }, 2000);
 }, [])
 return {data, isLoading, error}
}
