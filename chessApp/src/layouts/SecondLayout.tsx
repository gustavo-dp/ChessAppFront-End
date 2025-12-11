import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const SecondLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
