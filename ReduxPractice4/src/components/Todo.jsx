import React, { useState } from 'react';
import { removeTodo, updateTodo } from '../features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [updatedText, setUpdatedText] = useState('');
    const [editId, setEditId] = useState(null);

    const handleUpdateClick = (id, text) => {
        setEditId(id);
        setUpdatedText(text);
    };

    const handleUpdate = () => {
        if (editId !== null) {
            const updatedTodo = {
                id: editId,
                text: updatedText,
            };
            dispatch(updateTodo(updatedTodo));
            setEditId(null);
            setUpdatedText('');
        }
    };

    return (
        <>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {editId === todo.id ? (
                        <>
                            <input
                                type="text"
                                placeholder="Update text"
                                value={updatedText}
                                onChange={(e) => setUpdatedText(e.target.value)}
                            />
                            <button onClick={handleUpdate}>Save</button>
                        </>
                    ) : (
                        <>
                            {todo.text}
                            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                            <button onClick={() => handleUpdateClick(todo.id, todo.text)}>Update</button>
                        </>
                    )}
                </li>
            ))}
        </>
    );
};

export default Todo;
