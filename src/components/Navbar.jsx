import React from 'react'
import logo from "../assets/images/react.png"
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
       
          <img src={logo} alt="logo" className='nav--icon'/> 
          <h1 className='nav--logo--text'>React Facts</h1>
        
      <h4 className='nav-title'>React Course Project 1</h4>     
    </nav>
    </div>
  )
}

export default Navbar;