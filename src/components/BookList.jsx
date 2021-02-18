import React from 'react';
import BookItem from './BookItem'

const books = [
    { id: 'id-1', name: 'JS for beginners' },
    { id: 'id-2', name: 'React basics' },
    { id: 'id-3', name: 'React Router overview' },
    { id: 'id-4', name: 'Redux in depth' },
    { id: 'id-5', name: 'Stiven King' },
];

const BookList = () => (
    <ul>
<BookItem books = {books}></BookItem>
    </ul>
);

export default BookList; 