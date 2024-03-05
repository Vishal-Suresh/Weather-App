import React, { useState } from "react";
import './WeatherApp.css'; 

function WeatherApp() {
    const api = {
        key: "1bcd8c362c4b87dc403c381c3789611a",
        base: "https://api.openweathermap.org/data/2.5",
    };

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null); 

    const searchButton = async () => {
        const response = await fetch(`${api.base}/weather?q=${search}&APPID=${api.key}`);
        const data = await response.json();
        if(data.cod === 200){ 
            setWeather(data);
        }
        else {
            alert("Please enter valid data");
        }
    };

    return (
        <div className="app">
            <div className="weather-box">
                <header className="App-header">
                    <h1>Weather App</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-input"
                        />
                        <button onClick={searchButton} className="search-button">Search</button>
                    </div>
                    {weather &&
                        <div className="weather-info">
                            <p>{weather.name}, {weather.sys.country}</p>
                            <p>{weather.main.temp} °F</p>
                            <p>{weather.weather[0].description}</p> 
                        </div>
                    }
                </header>
            </div>
        </div>
    );
}

export default WeatherApp;

