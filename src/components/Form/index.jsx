import React from 'react';

const Form = (props) => (
    <>
    <label htmlFor="in">
        <input type="text" id="in" />
        </label>
        <button type='button' onClick={props.sayHello}>Push me</button>
        </>
);


export default Form;