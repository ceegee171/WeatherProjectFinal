function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("description");
  let humidityElement = document.querySelector("humidity");
  let windSpeedElement = document.querySelector("wind-speed");
  late date = new Date (response.data.time * 1000); 

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = `${date.getDay()} ${date.getHours()} : ${date.getMinutes()}`; 
  descriptionElement = response.data.condition.description;
  humidityElement = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = response.data.wind.speed;
  temperatureElement.innerHTMl = Math.round(temperature);
}

function formatDate(date){
    let day = date.getDay();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday", 
        "Thursday",
        "Friday",
        "Saturday",
    ]; 
    let day = day[date.getDay()];
    if (minutes < 10) {
        minutes = `0${minutes}`

    
    return `${day}, ${hours }:${minutes}`; 
}
function searchCity(city) {
  let apiKey = "1841a154a3444205bo994f2f03567t09";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key={apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-search-action");

searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#form-search");
searchFormElement.addEventListener("submit", handleSearchSubmit); 