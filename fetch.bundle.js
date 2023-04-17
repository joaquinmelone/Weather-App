"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["fetch"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/fetch.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQLHNIQUFzSCxZQUFZO0FBQ2xJO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9mZXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGZXRjaCB0aGUgV2VhdGhlciBpbmZvcm1hdGlvblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjb3VudHJ5TmFtZSkge1xuICAgIGNvbnN0IHdlYXRoZXJKU09OID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xNmQwMDBhOTkzZTE0MzdiYTI5MDQ4NTAyMzA0MDQmcT0ke2NvdW50cnlOYW1lfSZhcWk9bm9gLCB7XG4gICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgIH0pXG5cbiAgICBjb25zdCB3ZWF0aGVyR2VuZXJhbEluZm8gPSBhd2FpdCB3ZWF0aGVySlNPTi5qc29uKCk7XG5cbiAgICAvLyBPYnRhaW4gdGhlIHZhbHVlcyBmcm9tIHRoZSBBUElcbiAgICBjb25zdCBjb3VudHJ5VGVtcGVyYXR1cmUgPSB3ZWF0aGVyR2VuZXJhbEluZm8uY3VycmVudC50ZW1wX2M7XG4gICAgY29uc3QgY291bnRyeUh1bWlkaXR5ID0gd2VhdGhlckdlbmVyYWxJbmZvLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgY29uc3QgY291bnRyeUZlZWxzTGlrZSA9IHdlYXRoZXJHZW5lcmFsSW5mby5jdXJyZW50LmZlZWxzbGlrZV9jO1xuXG4gICAgcmV0dXJuIFtjb3VudHJ5VGVtcGVyYXR1cmUsIGNvdW50cnlIdW1pZGl0eSwgY291bnRyeUZlZWxzTGlrZV07XG59XG5cblxuXG4vLyBFc3RvIGZ1bmNpb25hIHBlcm8gZXN0w6EgbWFsIHBvcnF1ZSBsYSBmdW5jacOzbiBnZXRXZWF0aGVyIHNvbG8gZGViZXLDrWEgZW5jYXJnYXJzZSBkZSBkZXZvbHZlciBlbCBjbGltYSwgYWRqdW50YXIgZXNvIGVuIHVuIGRpdiBvIHNpbWlsYXIgZGViZXLDrWEgc2VyXG4vLyB1bmEgdGFyZWEgYXBhcnRlLCBsbGV2YWRhIGEgY2FibyBwb3Igb3RyYXMgZnVuY2lvbmVzIG8gc2ltcGxlbWVudGUgcG9yIGZ1ZXJhIGRlIGVzYSBmdW5jacOzbiBlbiBwYXJ0aWN1bGFyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9