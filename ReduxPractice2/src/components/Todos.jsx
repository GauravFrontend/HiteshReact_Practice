import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../todo/todoSlice'

const Todos = () => {
    const todos = useSelector(e => e.todos);
    const dispatch = useDispatch();
    const [editID, setEditID] = useState();
    const [updatedText, setUpdatedText] = useState("");
    return (
        <>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {editID === todo.id ? (<>
                        <input type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} />
                        <button onClick={() => {
                            const updatedone = {
                                id: editID,
                                text: updatedText
                            }
                            dispatch(updateTodo(updatedone))
                            setEditID(null)
                        }} >Save</button>
                        <button onClick={() => setEditID(null)}>X</button>
                    </>) :
                        (<>
                            {todo.text}
                            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                            <button onClick={() => {
                                setEditID(todo.id)
                                setUpdatedText(todo.text)
                            }}>Update</button>
                        </>)}
                </li>
            ))}
        </>
    );
}

export default Todos