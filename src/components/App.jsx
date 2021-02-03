import React, { useState, useEffect } from 'react';
import Greeting from './greeting';
import Clock from './Clock';
import Tarik from './Tarik';
import Header from './Header.jsx';
import Footer from './Footer';
import Calculation from './calculation';
import CurrentTemp from './CurrentWeather';
import CurrentLoc from './CurrentLocation';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';



function App() {

    const [temp, setTemp] = useState();
    const [place, setPlace] = useState("");
    const [image, setImage] = useState("");
    const [weatherDescription, setWeatherDescription] = useState("");

    const api_call = async () => {

        const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=086ab8e2d6458025d41c503792f73761&units=metric"
        const request = axios.get(url)
        const response = await request
        setTemp(response.data.main.temp)
        setPlace(response.data.name)
        setImage(response.data.weather[0].icon)
        setWeatherDescription(response.data.weather[0].description)
    }

    useEffect(() => {
        api_call()
    }, [])

    return (
        <div>

            <div>
                <Header />
            </div>

            <div clas="container">

                <div className="weather-container">

                    <div className="weather-place">
                        <CurrentLoc
                            place={place}
                        />

                    </div>

                    <div className="weather-temp">

                        <CurrentTemp
                            temperature={temp}
                        />

                    </div>

                    <div className="weather-icon">

                        <WeatherIcon
                            imgIcon={image}

                            description={weatherDescription}
                        />

                    </div>


                </div>

                <div className="Clock">
                    <Clock />
                    <Tarik />
                </div>

                <div className="greet">
                    <Greeting />
                </div>

                <div className="calculation">
                    <Calculation />
                </div>


                <div>
                    <Footer />
                </div>

            </div>


        </div>
    )

}

export default App;