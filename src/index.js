import { createWeatherDiv } from './weatherDivManipulation.js';


// Get the information from the form and display the weather based on that

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", e => {
    const countryName = document.getElementById("country-name").value;
    createWeatherDiv(countryName);

    e.preventDefault();
})