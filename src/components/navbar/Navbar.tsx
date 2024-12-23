import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar: React.FC = () => {
  return (
    <nav className='navbar-container'>
      <NavLink to='/' end>
        Home
      </NavLink>

      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default Navbar
