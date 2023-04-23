import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Navbar.css'
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-div">
        <p>DHEERAJ</p>
        <h6>Developer</h6>
      </div>
      <nav className='nav-menu'>
        <ul>   
          <li><Link to="/" className='nav-link hover-style'>Home</Link></li>
          <li><Link to="work" className='nav-link hover-style'>Work</Link></li>
          <li><a href="#Exp" className='nav-link hover-style' >Experience</a></li>
          <li><a href="#Exp" className='nav-link hover-style' >About</a></li>
          <li><a href="#Contact" className='button' >Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar