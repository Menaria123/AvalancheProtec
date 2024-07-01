import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling
import Icon from './icon'; // Import the Icon component

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetch user's location
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;

        // Fetch weather data
        const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your OpenWeatherMap API key
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        const response = await fetch(weatherApiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const weatherData = await response.json();
        setWeather(weatherData);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setError('Unable to retrieve weather data');
      }
    };

    fetchWeather();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  const celsius = weather.main.temp.toFixed(1);
  const fahrenheit = (celsius * 9/5 + 32).toFixed(1);

  return (
    <div className="weather">
      <div className="weather-data">
        <div className="temperature">
          <div id="icon">
            <Icon temperature={celsius} />
          </div>
          <div className="box">
            <span className="temp-c">{celsius}° C / {fahrenheit}° F</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;