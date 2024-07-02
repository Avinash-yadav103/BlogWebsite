import React from 'react'
import './css/header.css'
// import Nandu from './hosiyarpur.jpg'


function Header() {
  return (
    <>
      <div>

        <div className='header'>
          <div className="name">
            Nook
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
