import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todoSlice"
const AddTodo = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <>
    <form onSubmit={onSubmitHandler}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>ADD</button>
    </form>
    </>
  )
}

export default AddTodo