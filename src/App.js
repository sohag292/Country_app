import React, { useEffect, useState } from 'react';
import Countries from './countury/Countries';
import './app.css'
import Search from './countury/Search';
const url = 'https://restcountries.com/v3.1/all';
const App = () => {

    const [countries, setCountries] = useState(null)
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null)
    const [filterdCountries, setfilterdCountries] = useState(countries)

   const handleRemoveCountries=(name)=>{
    const filter = filterdCountries.filter((country)=>country.name.common !== name);
    setfilterdCountries(filter)
   }
   
    const fetchData = async (url)=>{
        setIsloading(true)
        try{
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setfilterdCountries(data);
            setIsloading(false);
            setError(null);
            console.log(countries);
        }catch(error){
            setIsloading(false);
            setError(error);
        }


    }

    useEffect(()=>{
        fetchData(url)
    }, [])
    const handleSearch=(searchValue)=>{
        // alert(searchValue);
        let value = searchValue.toLowerCase();
        const newCountries = countries.filter((country)=>{
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value)

        })

        setfilterdCountries(newCountries)
    }
    return <> 
          <h1>Country App</h1>
          <Search onSearch={handleSearch}></Search>
          {isLoading && <h2> Loading....</h2>}
          {error && <h2>{error.message}</h2>}
          {countries && <Countries countries={filterdCountries} onRemoveCountries={handleRemoveCountries} ></Countries>}
        </>
   
};

export default App;