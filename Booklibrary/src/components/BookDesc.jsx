// components/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { bookId } = useParams();
  const book = useSelector((state) => state.Books)
  console.log(book[1])

  return (
    <div>
      <h2>Book Details</h2>
    </div>
  );
};

export default BookDetails;
