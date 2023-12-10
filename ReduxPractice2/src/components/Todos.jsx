import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <>
        <h1>Todos</h1>
        {todos.map((todo)=> (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))}
        </>
    )
}

export default Todos