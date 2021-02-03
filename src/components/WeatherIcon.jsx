import React from 'react';

function WeatherIcon(props){
    
    return (
    <div><img src = {"http://openweathermap.org/img/wn/" + props.imgIcon + "@2x.png"} alt = "w"></img>
    <h2>{props.description}</h2>
    </div>
    )
    
}

export default WeatherIcon;