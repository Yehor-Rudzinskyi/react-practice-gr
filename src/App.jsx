import React from 'react';
import NewComponent from './components/NewComponents';
import Header from './components/Header';
import Form from './components/Form';
import BookList from './components/BookList'



const App = () => {
    const x = 73;
    const sayHello = () => console.log('Hello');
    return (
    
        <div className='App'>
            <Header someNumber={x} someText='Text for header' age={22} />
            <Form sayHello={sayHello} />
            <NewComponent>
                <h1>Test</h1>
            </NewComponent>
            <BookList />
        </div>);
};

export default App;