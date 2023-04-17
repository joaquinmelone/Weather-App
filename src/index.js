import { createWeatherDiv } from './weatherDivManipulation.js';


// Get the information from the form and display the weather based on that

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", e => {
    const countryName = document.getElementById("country-name").value;
    createWeatherDiv(countryName);

    e.preventDefault();
})

//

/* async function call() {
    const a = await fetch("http://api.weatherapi.com/v1/current.json?key=16d000a993e1437ba2904850230404&q=London&aqi=no", {mode: 'cors'})

    console.log(await a.json())
}

call(); */