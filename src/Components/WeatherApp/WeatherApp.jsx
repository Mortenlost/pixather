import React, { useState } from 'react'
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
    let api_key = process.env.REACT_APP_API_KEY

    const[wicon,setWicon] = useState(cloud)
    
    const search = async () => {
      const element =document.getElementsByClassName("cityInput")
      if(element[0].value==="")
      {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`; 
      let response = await fetch(url);
      let data = await response.json();
      const humidity =document.getElementsByClassName("humidity-porcent")
      const wind =document.getElementsByClassName("wind-speed")
      const temp =document.getElementsByClassName("weather-temp")
      const location =document.getElementsByClassName("weather-location")

      humidity[0].innerHTML = data.main.humidity+" %";
      wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
      temp[0].innerHTML = Math.floor(data.main.temp)+"°c";
      location[0].innerHTML = data.name;  

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
      {
          setWicon(clear);
      }
      else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
      {
          setWicon(cloud);
      }
      else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
      {
          setWicon(cloud);
      }
      else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
      {
          setWicon(cloud);
      }
      else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
      {
          setWicon(drizzle);
      }
      else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
      {
          setWicon(rain);
      }
      else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
      {
          setWicon(snow);
      }
      else{
        setWicon(clear);
      }
    }

  return (  
    <div className="container">
        <div className='top-bar'>
          <input type="text" className='font cityInput' placeholder='Search' />
          <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className='weather-image'>
          <img src={wicon} alt="" />
        </div>
        <div className='font weather-temp'>24°c</div>
        <div className="font weather-location">London</div>
        <div className="data-container">
          <div className="element">
              <img src={humidity} alt="" />
              <div className="data">
                  <div className="font humidity-porcent">64%</div>
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