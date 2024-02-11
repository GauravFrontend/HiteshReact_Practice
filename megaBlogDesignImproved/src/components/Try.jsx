import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authSlice';

const Try = () => {
    const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(login("someh")) } >click</button>
  )
}

export default Try