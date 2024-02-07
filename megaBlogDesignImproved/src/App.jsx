import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import PostCard from './components/PostCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <PostCard/>
   <Footer/>
   </>
  )
}

export default App
