import React from 'react';

const ColorGenerator = props => {
    return (
        <button onClick={props.colorGeneratorHandler}>Generate Color</button>
    );
};

export default ColorGenerator