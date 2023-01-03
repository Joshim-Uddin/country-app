import React, {useEffect, useState} from 'react'
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';

const url = 'https://restcountries.com/v3.1/all'


function App() {
  const [countries, setCountries]=  useState([])
  const [filteredCountries, setFilteredCountries]=  useState(countries)
  const [isLoading, setIsLoading]=  useState(true)
  const [error, setError]=  useState(null)

  const fetchData = async (url)=>{
    setIsLoading(true)
    try{
      const response = await fetch(url)
    const data = await response.json()
    setCountries(data);
    setFilteredCountries(data);
    setIsLoading(false)
    }
    catch(error){
      setIsLoading(false)
      setError(error)
    }
  }
  const getCountryName = (name)=>{
    setFilteredCountries(filteredCountries.filter((country)=> country.name.common!== name
       
    ))
  }
  const searchName = (value)=>{
    const searchText = value.toLowerCase()
    const newCountries = countries.filter((country)=> {
      const countryName = country.name.common.toLowerCase()
      return countryName.startsWith(searchText)
    });
    setFilteredCountries(newCountries)
  }  
  

  useEffect(()=>{
    fetchData(url)
  }, [])
  return (
   <>
   <h1>Country App</h1>
   <Search searchName= {searchName}/>
   {error && <p>{error.message}</p>}
   {isLoading && <p>{'Data is Loading'}</p>}
   <Countries countries = {filteredCountries} getCountryName = {getCountryName}/>
   </>
  );
}

export default App;
