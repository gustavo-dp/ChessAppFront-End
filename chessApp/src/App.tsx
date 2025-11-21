import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Matches from './pages/matches/Matches'
import MainLayout from './layouts/MainLayout'
import Trainer from './pages/trainer/Trainer'
import MainRoute from './routes/MainRoute'

function App() {
 
  


  return (
   <MainRoute/>
  )
}

export default App
