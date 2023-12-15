// components/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { bookId } = useParams();
  const book = useSelector((state) => state.books)

const bookObject = book.find((item) => item.bookId === bookId)

console.log(bookObject.bookDetails)




  return (
    <div>
      <h2>Book Details : <br /> {bookObject.bookDetails}</h2>
    </div>
  );
};

export default BookDetails;
