import React from 'react'
import Country from './Country'
import {v4 as uuidv4} from 'uuid'

const Countries = (props) => {
  const getCountryName = (name)=>{
    props.getCountryName(name)
  }
  return (
    <section>
        {props.countries && props.countries.map((country)=> {
            const countryNew = {country, id: uuidv4()}
            return <Country {...countryNew} key={countryNew.id} getCountryName={getCountryName} />
        })}
    </section>
  )
}

export default Countries