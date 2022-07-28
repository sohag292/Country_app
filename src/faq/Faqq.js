import React, { useState } from 'react'
import style from './faqq.module.css'
export default function Faqq({id,title,desc}) {
    const [toggle, setToggle] = useState(false)
  return (

        <article className={style.faq}>
            <div>
                <h4>{title}</h4>
                <button onClick={()=>setToggle(!toggle)}>{toggle ? '+': '-'}</button>
            </div>
            {toggle && (<p>{desc}</p>)}
        </article>
 
  )
}
