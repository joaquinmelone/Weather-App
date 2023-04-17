// Fetch the Weather information

export async function getWeather(countryName) {
    const weatherJSON = await fetch(`http://api.weatherapi.com/v1/current.json?key=16d000a993e1437ba2904850230404&q=${countryName}&aqi=no`, {
        mode: 'cors'
    })

    const weatherGeneralInfo = await weatherJSON.json();

    // Obtain the values from the API
    const countryTemperature = weatherGeneralInfo.current.temp_c;
    const countryHumidity = weatherGeneralInfo.current.humidity;
    const countryFeelsLike = weatherGeneralInfo.current.feelslike_c;

    return [countryTemperature, countryHumidity, countryFeelsLike];
}



// Esto funciona pero está mal porque la función getWeather solo debería encargarse de devolver el clima, adjuntar eso en un div o similar debería ser
// una tarea aparte, llevada a cabo por otras funciones o simplemente por fuera de esa función en particular