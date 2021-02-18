import React from 'react';

const NewComponent = (props) => (
    <>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ducimus quam ipsa libero explicabo nemo iusto facilis expedita eligendi, officiis ab vel eveniet quidem laborum quibusdam beatae, dicta repudiandae fuga! </p>
        {props.children}
    </>
);

export default NewComponent;