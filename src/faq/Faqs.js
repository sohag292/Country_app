import React from 'react';
import { useState } from 'react';
import { faqsData } from '../data.js'
import Faqq from './Faqq.js';
import style from './faqs.module.css'

export default function Faqs() {
   console.log(faqsData);
   const [Faqs, setFaqs] = useState(faqsData)
  return (
  
        <main className={style.container}>
            <section className={style.faqs}>
                {Faqs.map((faqs)=><Faqq key={faqs.id} {...faqs}></Faqq>)}
            </section>
        </main>
    
  )
}
