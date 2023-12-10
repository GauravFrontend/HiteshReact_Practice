import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todoSlice'
const AddTodo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const onClickHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
    }
    return (
        <>
        <form>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={onClickHandler}>Add</button>
        </form>


        </>
    )
}

export default AddTodo