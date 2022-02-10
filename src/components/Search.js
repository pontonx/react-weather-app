import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'



const Search = ( {onChange} ) => {
  
  

  return (
    <div id='searchcontainer'>
        <span id='searchicon'><BiSearchAlt color='grey' size={25} /></span>
        <input type="text" placeholder='which city?' onChange={onChange} />
    </div>
  )
}

export default Search