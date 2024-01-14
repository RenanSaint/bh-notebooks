import { useState } from 'react'
import './App.css'
import Logo from './assets/Logo.png'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import UserFrame from './components/UserFrame'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='sideBar'>
        <img src={Logo}/>
        <UserFrame/>
        <p id='navLabel'>Navegação</p>
        <Navbar/>
      </div>
      <div className='content'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
