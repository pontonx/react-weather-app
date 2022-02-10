import React from 'react'
import { WiCloud } from 'react-icons/wi'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <h1>Weather app</h1>
            <WiCloud size={50} />
        </div>
    </header>
  )
}

export default Header