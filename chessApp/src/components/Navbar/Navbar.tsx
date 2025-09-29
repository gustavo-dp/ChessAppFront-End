import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <ul>
        <NavLink to='/'><li>home</li></NavLink>
        <NavLink to='/matches'><li>matches</li></NavLink>
        <NavLink to='/trainer'><li>trainer</li></NavLink>
        <NavLink to='user'><li>svg</li></NavLink>
    </ul>
  )
}

export default Navbar;