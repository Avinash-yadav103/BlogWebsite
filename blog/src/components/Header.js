import React from 'react'
import './css/header.css'

function Header() {
  return (
    <div>

      <div className="signin_pop">
        
      </div>

      <div className='header'>
        <div className="name">
            Nook
        </div>
        <div className="search">
            <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  )
}

export default Header
