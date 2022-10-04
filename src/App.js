import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [weather, setWeather] = useState("");

  const getWeatherLDN = () => {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=London&type=hour&start=23&cnt=3&appid=3e59df4403ab714e43c3be93b1d8dda9").then(
      (response)=> {
        console.log(response);
        setWeather("Temp: " + response.data.list[0].main.temp + "K Conditions: " + response.data.list[0].weather[0].description);
      }
    );
  };

  const getWeatherLeeds = () => {
    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Leeds&type=hour&start=23&cnt=3&appid=3e59df4403ab714e43c3be93b1d8dda9").then(
      (response)=> {
        console.log(response);
        setWeather("Temp: " + response.data.list[0].main.temp + "K Conditions: " + response.data.list[0].weather[0].description);
      }
    );
  };

  return (
    <div className="App">
      <button onClick={getWeatherLDN}>Osterley</button>
      <button onClick={getWeatherLeeds}>Leeds</button>
      {weather}
    </div>
  );
}

export default App;
