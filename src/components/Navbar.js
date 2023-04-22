import React from 'react'
import './styles/Navbar.css'
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-div">
        <h1>DHEERAJ</h1>
      </div>
      <nav className='nav-menu'>
        <ul>
          <li><a href="#Work" className='nav-link hover-style' >Work</a></li>
          <li><a href="#Exp" className='nav-link hover-style' >Experience</a></li>
          <li><a href="#Exp" className='nav-link hover-style' >About</a></li>
          <li><a href="#Contact" className='button' >Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar