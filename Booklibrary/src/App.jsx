import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddBook/>
    <BookList/>
    <Outlet/>
    </>
  )
}

export default App
