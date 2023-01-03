import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const {searchName} = props
    const [searchText, setSearchText] = useState('')
    const handleChange = (e)=>{
        setSearchText(e.target.value)
    }
    useEffect(()=>{
        searchName(searchText)
    },[searchText])
  return (
    <div className='search'>
        <input type='text' placeholder='Search Country...' onChange={handleChange}/>
    </div>
  )
}

export default Search