"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
// Fetch the Weather information

async function getWeather(countryName) {
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherDivManipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDivManipulation.js */ "./src/weatherDivManipulation.js");



// Get the information from the form and display the weather based on that

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", e => {
    const countryName = document.getElementById("country-name").value;
    (0,_weatherDivManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createWeatherDiv)(countryName);

    e.preventDefault();
})

//

async function call() {
    const a = await fetch("http://api.weatherapi.com/v1/current.json?key=16d000a993e1437ba2904850230404&q=London&aqi=no", {mode: 'cors'})

    console.log(await a.json())
}

call();

/***/ }),

/***/ "./src/weatherDivManipulation.js":
/*!***************************************!*\
  !*** ./src/weatherDivManipulation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeatherDiv": () => (/* binding */ createWeatherDiv)
/* harmony export */ });
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ "./src/fetch.js");


// Function for creating the div with the weather info

async function createWeatherDiv(countryName) {
    // Divs from main content
    const countryNameDiv = document.querySelector(".countryname-weather-div");
    const temperatureNameDiv = document.querySelector(".temperature-weather-div");
    const humidityNameDiv = document.querySelector(".humidity-weather-div");
    const feelslikeNameDiv = document.querySelector(".feelslike-weather-div");

    // Array with values from the API
    const weatherInfoArray = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(countryName);

    // Put the values into the div

    countryNameDiv.textContent = `${countryName}`;
    temperatureNameDiv.textContent = `Temperature: ${weatherInfoArray[0]}°C`;
    humidityNameDiv.textContent = `Humidity: ${weatherInfoArray[1]}%`;
    feelslikeNameDiv.textContent = `Feels Like: ${weatherInfoArray[2]}°C`;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQLHNIQUFzSCxZQUFZO0FBQ2xJO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEIrRDs7O0FBRy9EOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDRFQUFnQjs7QUFFcEI7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsMkhBQTJILGFBQWE7O0FBRXhJO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCd0M7O0FBRXhDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixxREFBVTs7QUFFdkM7O0FBRUEsb0NBQW9DLFlBQVk7QUFDaEQscURBQXFELG9CQUFvQjtBQUN6RSwrQ0FBK0Msb0JBQW9CO0FBQ25FLGtEQUFrRCxvQkFBb0I7QUFDdEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy93ZWF0aGVyRGl2TWFuaXB1bGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZldGNoIHRoZSBXZWF0aGVyIGluZm9ybWF0aW9uXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNvdW50cnlOYW1lKSB7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTE2ZDAwMGE5OTNlMTQzN2JhMjkwNDg1MDIzMDQwNCZxPSR7Y291bnRyeU5hbWV9JmFxaT1ub2AsIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfSlcblxuICAgIGNvbnN0IHdlYXRoZXJHZW5lcmFsSW5mbyA9IGF3YWl0IHdlYXRoZXJKU09OLmpzb24oKTtcblxuICAgIC8vIE9idGFpbiB0aGUgdmFsdWVzIGZyb20gdGhlIEFQSVxuICAgIGNvbnN0IGNvdW50cnlUZW1wZXJhdHVyZSA9IHdlYXRoZXJHZW5lcmFsSW5mby5jdXJyZW50LnRlbXBfYztcbiAgICBjb25zdCBjb3VudHJ5SHVtaWRpdHkgPSB3ZWF0aGVyR2VuZXJhbEluZm8uY3VycmVudC5odW1pZGl0eTtcbiAgICBjb25zdCBjb3VudHJ5RmVlbHNMaWtlID0gd2VhdGhlckdlbmVyYWxJbmZvLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG5cbiAgICByZXR1cm4gW2NvdW50cnlUZW1wZXJhdHVyZSwgY291bnRyeUh1bWlkaXR5LCBjb3VudHJ5RmVlbHNMaWtlXTtcbn1cblxuXG5cbi8vIEVzdG8gZnVuY2lvbmEgcGVybyBlc3TDoSBtYWwgcG9ycXVlIGxhIGZ1bmNpw7NuIGdldFdlYXRoZXIgc29sbyBkZWJlcsOtYSBlbmNhcmdhcnNlIGRlIGRldm9sdmVyIGVsIGNsaW1hLCBhZGp1bnRhciBlc28gZW4gdW4gZGl2IG8gc2ltaWxhciBkZWJlcsOtYSBzZXJcbi8vIHVuYSB0YXJlYSBhcGFydGUsIGxsZXZhZGEgYSBjYWJvIHBvciBvdHJhcyBmdW5jaW9uZXMgbyBzaW1wbGVtZW50ZSBwb3IgZnVlcmEgZGUgZXNhIGZ1bmNpw7NuIGVuIHBhcnRpY3VsYXIiLCJpbXBvcnQgeyBjcmVhdGVXZWF0aGVyRGl2IH0gZnJvbSAnLi93ZWF0aGVyRGl2TWFuaXB1bGF0aW9uLmpzJztcblxuXG4vLyBHZXQgdGhlIGluZm9ybWF0aW9uIGZyb20gdGhlIGZvcm0gYW5kIGRpc3BsYXkgdGhlIHdlYXRoZXIgYmFzZWQgb24gdGhhdFxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1idXR0b25cIik7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50cnktbmFtZVwiKS52YWx1ZTtcbiAgICBjcmVhdGVXZWF0aGVyRGl2KGNvdW50cnlOYW1lKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbi8vXG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGwoKSB7XG4gICAgY29uc3QgYSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTE2ZDAwMGE5OTNlMTQzN2JhMjkwNDg1MDIzMDQwNCZxPUxvbmRvbiZhcWk9bm9cIiwge21vZGU6ICdjb3JzJ30pXG5cbiAgICBjb25zb2xlLmxvZyhhd2FpdCBhLmpzb24oKSlcbn1cblxuY2FsbCgpOyIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL2ZldGNoLmpzJztcblxuLy8gRnVuY3Rpb24gZm9yIGNyZWF0aW5nIHRoZSBkaXYgd2l0aCB0aGUgd2VhdGhlciBpbmZvXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyRGl2KGNvdW50cnlOYW1lKSB7XG4gICAgLy8gRGl2cyBmcm9tIG1haW4gY29udGVudFxuICAgIGNvbnN0IGNvdW50cnlOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudHJ5bmFtZS13ZWF0aGVyLWRpdlwiKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZU5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlLXdlYXRoZXItZGl2XCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5TmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHktd2VhdGhlci1kaXZcIik7XG4gICAgY29uc3QgZmVlbHNsaWtlTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNsaWtlLXdlYXRoZXItZGl2XCIpO1xuXG4gICAgLy8gQXJyYXkgd2l0aCB2YWx1ZXMgZnJvbSB0aGUgQVBJXG4gICAgY29uc3Qgd2VhdGhlckluZm9BcnJheSA9IGdldFdlYXRoZXIoY291bnRyeU5hbWUpO1xuXG4gICAgLy8gUHV0IHRoZSB2YWx1ZXMgaW50byB0aGUgZGl2XG5cbiAgICBjb3VudHJ5TmFtZURpdi50ZXh0Q29udGVudCA9IGAke2NvdW50cnlOYW1lfWA7XG4gICAgdGVtcGVyYXR1cmVOYW1lRGl2LnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke3dlYXRoZXJJbmZvQXJyYXlbMF19wrBDYDtcbiAgICBodW1pZGl0eU5hbWVEaXYudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckluZm9BcnJheVsxXX0lYDtcbiAgICBmZWVsc2xpa2VOYW1lRGl2LnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlckluZm9BcnJheVsyXX3CsENgO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==