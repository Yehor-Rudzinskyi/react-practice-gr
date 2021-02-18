import React from 'react';

const Header = ({ someNumber, someText, age }) => {

    return (
        <>
            {someNumber > 10
                ? (<h1>{someNumber} more then 10 </h1>)
                : (<h1>{someNumber} less then 10 </h1>)}
           {age < 18 && <p>NOT 18+ yet!</p>}
            <p>{someText}</p>
        </>
    );

};
export default Header;