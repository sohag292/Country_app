import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const [search, setSearch] = useState("")

    const handleChange=(e)=>{
        setSearch(e.target.value)
      
    }

    useEffect(()=>{
       props.onSearch(search);

    }, [search])
  return (
    <div style={{textAlign:"center"}}>
        <form action="" >
            <label htmlFor="search"></label>
            <input type="text" name='search' placeholder='Search Country' onChange={handleChange} value={search} />
        </form>
    </div>
  )
}
