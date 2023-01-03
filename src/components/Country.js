import React from 'react'

const Country = (props) => {
    const {name, capital, population, flags, area} = props.country
    const handleClick=(name)=>{
      props.getCountryName(name)
    }
  return (
    <article>
        <img src={flags.png} alt={name.common} />
        <h2>{name.common}</h2>
        <h4>Capital : {capital}</h4>
        <p>Population : {population}</p>
        <p>Area : {area}</p>
        <button onClick={()=>{
          handleClick(name.common)
        }}>Remove Country</button>
    </article>
  )
}

export default Country