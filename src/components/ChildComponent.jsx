import React from 'react';

const ChildComponent = ({ handleClick }) => {
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ChildComponent;
