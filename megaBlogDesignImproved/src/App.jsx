import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import PostCard from './components/PostCard'
import { Outlet } from 'react-router-dom'
import Try from './components/Try'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Try/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default App
