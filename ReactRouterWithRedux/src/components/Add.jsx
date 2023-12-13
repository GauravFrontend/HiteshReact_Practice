import React, { useState } from 'react'
import '../App.css'
import { addCount } from '../features/countSlice'
import { useDispatch } from "react-redux"
const Add = () => {
  const dispatch = useDispatch()
  const [add, setAdd] = useState("5");
  return (
    <>
      <div id="mainAdd">
        <input type="range" value={add} onChange={(e) => setAdd(e.target.value)} />
        {add}
        <button onClick={(e) => {
          e.preventDefault()
          dispatch(addCount(add))
        }}>Add</button>
      </div>
    </>
  )
}

export default Add