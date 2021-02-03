import React from 'react';


function Greeting(){

    const greetTime = new Date().getHours();
    let greetNow = "";

    if ( greetTime < 12){
        greetNow = "Good Morning";
    } else if (greetTime >= 12 && greetTime < 16){
        greetNow = "Good Afternoon";
    } else if (greetTime >= 16 && greetTime < 24){
        greetNow = "Good Evening";
    }

    return <h1>{greetNow}</h1>

}

export default Greeting;


