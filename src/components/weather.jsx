import React, { useEffect, useState } from 'react'

export const Weather = ({ city }) => {

   
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
