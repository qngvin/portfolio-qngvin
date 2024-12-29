import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.scss'
const Navbar: React.FC = () => {
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' }
  ]

  const currentLink = links.find((link) => link.path === location.pathname)
  console.log(currentLink)
  return (
    <nav className='navbar-container'>
      <div className='navbar-content'>
        <div className='logo-container'>
          <div className='logo-content' />
        </div>
        <div className='menu-container'>
          <NavLink to='/' end>
            Home
          </NavLink>

          <NavLink to='/about'>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
