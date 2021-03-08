import './App.css';
import React, { useState } from 'react';

const api = {
  key: "edf48109910697a24b55efdff8cf31f1",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={
      (typeof weather.main != "undefined") 
      ? ((weather.main.temp > 16) 
        ? 'app warm' 
        : 'app') 
      : 'app'
    }>
      <main>
        <div id="search-box">
          <input 
            type="text"
            id="search-bar"
            placeholder="Search...."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div>
              <div id="location-box">
                <div id="location">{weather.name}, {weather.sys.country}</div>
                <div id="date">{dateBuilder(new Date())}</div>
              </div>
            </div>

            <div id="weather-box">
              <div id="temp">
                {Math.round(weather.main.temp)} °C
              </div>
              <div id="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
