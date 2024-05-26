import React, { useState, useEffect } from 'react';
import './Weather.css'; // Import the CSS file for styling



const Weather = () => {
  const [weather, setWeather] = useState(null);

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
      }
    };

    fetchWeather();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  if (!weather) {
    return <div>Loading...</div>;
  }

  // Function to convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };
  return (
    <div className="weather">
      <div className="weather-data">
        <div className="temperature">
          <div className="box">
            <span className="temp-c">{weather.main.temp.toFixed(1)}° C</span>
            <span className="temp-f">{celsiusToFahrenheit(weather.main.temp).toFixed(1)}° F</span>
          </div>
        </div>
        <div className="description">{weather.weather[0].description}</div>
      </div>
    </div>
  );
};

export default Weather;
