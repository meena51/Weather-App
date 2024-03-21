import React, { useState } from 'react'
import './WeatherApp.css'
import clear_icon from '../Images/clear.png'
import cloud_icon from '../Images/cloud.png'
import drizzle_icon from '../Images/drizzle.png'
import humidity_icon from '../Images/humidity.png'
import rain_icon from '../Images/rain.png'
import search_icon from '../Images/search.png'
import snow_icon from '../Images/snow.png'
import wind_icon from '../Images/wind.png'
const WeatherApp = () => {
    let api_key = '69b9e260bb1297a61a50260f01528a06';
    const [wicon, setWicon] = useState(cloud_icon);
    //to add functionality to search button
    const search = async ()=>{
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value==""){
            return 0;
        }
        //url obtained from weather api for different cities
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&lat=44.34&lon=10.99&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const  humidity = document.getElementsByClassName("humidity-percent")
        const  wind = document.getElementsByClassName("wind-speed")
        const  temp = document.getElementsByClassName("weather-temp")
        const  location = document.getElementsByClassName("weather-location")
        //Changing the co
        humidity[0].innerHTML = data.main.humidity;
        temp[0].innerHTML = data.main.temp;
        wind[0].innerHTML = data.wind.speed;
        location[0].innerHTML = data.name;
        if(data.weather[0].icon === "01d" || data.weather[0].icon === " 01n"){
            setWicon(clear_icon)
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(snow_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Enter city' />
            <div className='search-icon' onClick={()=>search()}>
                <img src={search_icon} alt=""  />
            </div>
        </div>
        <div className='weather-image'>
            <img src={wicon} alt="" />
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img className='icon' src={humidity_icon} alt="" />
                <div className='data'>
                    <div className='humidity-percent'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
                
            </div>
            <div className='element'>
                <img className='icon' src={wind_icon} alt="" />
                <div className='data'>
                    <div className='wind-speed'>18 km/hr</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WeatherApp
