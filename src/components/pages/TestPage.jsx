import React from 'react';
import NewComponent from '../NewComponents';
import Header from '../Header/index';
import Form from '../Form/index';


const TestPage = () => {
    const x = 73;
    const sayHello = () => console.log('Hello');
    return (
        <>
            <Header someNumber={x} someText='Text for header' age={22} />
            <Form sayHello={sayHello} />
            <NewComponent>
                <h1>Test</h1>
            </NewComponent>
        </>

    );
};

export default TestPage;