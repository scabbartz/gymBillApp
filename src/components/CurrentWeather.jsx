import React from 'react';

function CurrentTemp(props) {

    return (
        <div>
            <h2>: {props.temperature} °C</h2>            
        </div>
    )
}

export default CurrentTemp; 
