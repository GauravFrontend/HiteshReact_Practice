import React, { useState } from 'react'
import { removeCount } from '../features/countSlice';
import { useDispatch } from 'react-redux';
const Remove = () => {
  const dispatch = useDispatch();
const [remove, setRemove] = useState("7");
  return (
    <>
    <div id="mainAdd">
        <input type="range" value={remove} onChange={(e) => setRemove(e.target.value) } />
        {remove}
        <button onClick={(e) => {
          e.preventDefault()
          dispatch(removeCount(remove))
        }} >Remove</button>
    </div>
    </>
  )
}

export default Remove