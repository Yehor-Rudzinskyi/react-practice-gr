import React from "react";

const BookItem = ({books}) => (
    <>
        {books.map((book) => (<li key={book.id}>
            <h3>{book.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quasi nisi esse ?</p>
        </li>))}
    </>
);

export default BookItem; 