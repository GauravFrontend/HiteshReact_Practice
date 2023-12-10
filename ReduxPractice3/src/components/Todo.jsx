import React from 'react'
import { removeTodo } from '../features/todoSlice'
import { useSelector,useDispatch } from "react-redux"
const Todo = () => {
    const todoSelector = useSelector(state => state.todos )
    const dispatch = useDispatch();
  return (
    <>
    <h1>Todos</h1>
    {todoSelector.map((todo) => {
       return <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
    })}
    </>
  )
}

export default Todo