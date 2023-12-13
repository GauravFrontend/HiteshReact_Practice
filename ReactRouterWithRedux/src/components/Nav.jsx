import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
const Nav = () => {
  const selected = useSelector(state => state.count)
  return (
    <>
    <div id="navdiv">
    <h2>Count: {selected}</h2>
    <Link to="">Home</Link>
    <Link to="add">Add</Link>
    <Link to="remove">Remove</Link>
    </div>
    </>
  )
}

export default Nav