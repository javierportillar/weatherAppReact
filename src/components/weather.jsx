import React, { useEffect, useState } from 'react'

export const Weather = ({ city }) => {

    const [weatherData, setWeatherData] = useState([
        {
            name: 'Pasto',
            icon: '',
            description: '',
            temp: '',
            humidity: '',
            speed: '',
            country: '',
        }
    ]);

    const apiKey = "b762ee6a3270c8c061079750ae48d91d";

    const fetchWeather = async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    }

    const displayWeather = (data) => {
        console.log(data);
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;

        setWeatherData({ name, icon: `http://openweathermap.org/img/wn/${icon}.png`, description, temp, humidity, speed, country });
    }

    useEffect(() => {
        fetchWeather(city);
    }, [city])

    return (
        <div className='weather'>
            <div className="city-desc">
                <h1 className="city">Weather in: {weatherData.name} </h1>
                <h3 className="country">Country: {weatherData.country} </h3>
            </div>
            <div className="temp-container">
                <h1 className='temp'>{weatherData.temp}° C</h1>
                <div className='flex-cloud'>
                    <img src={weatherData.icon} alt="" className='icon' />
                    <div className='description'>{weatherData.description}</div>
                </div>
                <div className="humidity"> Humidity: {weatherData.humidity}%</div>
                <div className="wind"> Wind speed: {weatherData.speed} Km/h</div>
            </div>
        </div>

    )
}
