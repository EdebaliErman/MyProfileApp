import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        Edebali Erman
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>  <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
