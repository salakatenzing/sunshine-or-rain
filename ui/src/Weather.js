import React, { useState, useEffect } from "react";
import axios from "axios";
import './Styles/Form.css'

const Weather = (props) => {
  const [weather, setWeather] = useState("0");
  const [location, setLocation] = useState('');

  
  useEffect(() => {
    setLocation(props.sendLocation);
    if(location === '') {
      axios.get('/').then((res) => {
        })
    } else {
       axios.get(`/${location}`).catch(function (error) {
        console.log(error.toJSON());
      }).then((res) => {
        const weatherFromAPI = res.data;
        // console.log(weatherFromAPI)
        setWeather(weatherFromAPI);
        });
    }
    
   
    // console.log(weather)
  });

  return (
    
    <div>
      <h1>Current weather in {location} is: {weather} F</h1>
      
    </div>
  );
};
export default Weather;