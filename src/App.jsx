import React from 'react';
import NewComponent from './components/NewComponents';
import Header from './components/Header';
import Form from './components/Form';
import BookList from './components/BookList'

const books = [
    { id: 'id-1', name: 'JS for beginners' },
    { id: 'id-2', name: 'React basics' },
    { id: 'id-3', name: 'React Router overview' },
    { id: 'id-4', name: 'Redux in depth' },
    { id: 'id-5', name: 'Stiven King' },
];

const App = () => {
    const x = 73;
    const sayHello = () => console.log('Hello');
    return (
    
        <div className='App'>
            <Header someNumber={x} someText= 'Text for header' age={22} />
            <Form sayHello={sayHello}/>
            <NewComponent>
                <h1>Test</h1>
            </NewComponent>
<BookList books = {books}></BookList>
    </div>)
};

export default App;