import React from 'react'

import { RiCelsiusFill } from 'react-icons/ri'

const Weather = ( { city, degree, clouds, weathericon } ) => {

  return (
    <main>
      <p>{city}</p>
      <div id='degree'>
        <span>{Math.floor(degree)} <RiCelsiusFill size={100} id="celsius" /></span>
      </div>
      <p id='clouds'>{clouds}</p>
      <img src={weathericon} />
    </main>
  )
}

export default Weather