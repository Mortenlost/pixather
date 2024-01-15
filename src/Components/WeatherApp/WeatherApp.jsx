import React from 'react'
import './WeatherApp.css'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import  drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import search_icon from '../Assets/search_icon.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'


const WeatherApp = () => {
  return (  
    <div className="container">
        <div className='top-bar'>
          <input type="text" className='font cityInput' placeholder='Search' />
          <div className='search-icon'>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className='weather-image'>
          <img src={clear} alt="" />
        </div>
        <div className='font weather-temp'>24°c</div>
        <div className="font weather-location">London</div>
        <div className="data-container">
          <div className="element">
              <img src={humidity} alt="" />
              <div className="data">
                  <div className="font humidity-porcent">64 porcent</div>
                  <div className="font text">Humidity</div>
              </div>
          </div>
          <div className="element">
              <img src={wind} alt="" />
              <div className="data">
                  <div className="font wind-speed">18 Km/h</div>
                  <div className="font text">Wind Speed</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp