import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from "react-redux"
import '../App.css'
import { Link } from 'react-router-dom'


const BookList = () => {

    const books = useSelector(e => e.Books)
    return (
        <>
            <div id="listmain">
                {books.map((book) => <li key={book.bookId} ><Link 
                
                to={`${book.bookId}`}

                >{book.bookName}</Link></li>)}
            </div>
        </>
    )
}

export default BookList