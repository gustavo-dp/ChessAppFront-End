import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Matches from './pages/matches/Matches'
import MainLayout from './layouts/MainLayout'
import Trainer from './pages/trainer/Trainer'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='matches' element={<Matches/>}/>
        <Route path='trainer' element={<Trainer/>}/>
      </Route>

    )
  )


  return (
    <RouterProvider router={router}/>
  )
}

export default App
