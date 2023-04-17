import { getWeather } from './fetch.js';

// Function for creating the div with the weather info

export async function createWeatherDiv(countryName) {
    // Divs from main content
    const countryNameDiv = document.querySelector(".countryname-weather-div");
    const temperatureNameDiv = document.querySelector(".temperature-weather-div");
    const humidityNameDiv = document.querySelector(".humidity-weather-div");
    const feelslikeNameDiv = document.querySelector(".feelslike-weather-div");

    // Array with values from the API
    const weatherInfoArray = await getWeather(countryName);

    // Put the values into the div
    countryNameDiv.textContent = `${countryName}`;
    temperatureNameDiv.textContent = `Temperature: ${weatherInfoArray[0]}°C`;
    humidityNameDiv.textContent = `Humidity: ${weatherInfoArray[1]}%`;
    feelslikeNameDiv.textContent = `Feels Like: ${weatherInfoArray[2]}°C`;
}