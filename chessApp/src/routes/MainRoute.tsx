import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/login/Login'
import Trainer from '../pages/trainer/Trainer'

function MainRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/matches' element={<Login/>}></Route>
              <Route path='/trainer' element={<Trainer/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoute