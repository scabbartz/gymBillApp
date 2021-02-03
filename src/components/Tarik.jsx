import React from 'react';
import moment from 'moment';

function Tarik() {

    const today = moment().format("ddd, Do MMM yyyy");    

    return (
        <div>
            <h1> {today} </h1>
        </div>
    );



}

export default Tarik;