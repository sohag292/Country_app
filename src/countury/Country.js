import React from 'react'
import style from './country.module.css'
export default function Country(props) {
    // const {country} = props;
    const {name, flags, capital, population, area} = props.country;
  const onhandleName= (name) =>{
    props.onRemoveCountries(name);
  }
  return (
    <article className={style.country}> 
        <div>
            <img src={flags.png} className={style.flag} alt={name.common} />
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={style.btn} onClick={()=>{onhandleName(name.common)}}>Remove Countery</button>
        </div>
    </article>
  )
}
