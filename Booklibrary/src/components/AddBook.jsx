import React from 'react'
import { useDebugValue } from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { addBook } from '../features/bookSlice'
const AddBook = () => {
    const dispatch = useDispatch();
    const [bname, setBname] = useState("");
    const [bdetails, setBdetails] = useState("");
    const onclickhandler = (e) => {
        e.preventDefault()
        dispatch(addBook({bname,bdetails}))
        setBdetails("")
        setBname("")

    }
    return (
        <>
            <form>
                <input value={bname} placeholder='Book Name' onChange={(e) => setBname(e.target.value) } type="text" /><br />
                <input value={bdetails} placeholder='Book Description' onChange={(e) => setBdetails(e.target.value) } type="text" /><br />
                <button onClick={onclickhandler}>AddBook</button>
            </form>

        </>
    )
}

export default AddBook