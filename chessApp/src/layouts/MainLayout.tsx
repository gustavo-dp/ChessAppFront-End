import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './mainLayout.css'
function MainLayout() {
  return (
    <>
      <div className='main_container'>
        <Outlet />
      </div>

    </>
  )
}

export default MainLayout