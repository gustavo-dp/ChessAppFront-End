import React from 'react'
import {NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
   <nav>
        <div className="brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20h14"/><path d="M5 20V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h6V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11"/><path d="M4 4h16"/></svg>
            CHESS ARCHIVE
        </div>
        <div className="nav-links">
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/matches"}>matches</NavLink>
            <NavLink to={"/trainer"}>trainer</NavLink>
            <NavLink to={"/user"}>user</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;