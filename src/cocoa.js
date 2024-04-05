function refreshWeather(response) {
  let temperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = response.data.temperature.current;
  console.log(response.data.temperature.current);
}
function searchCity(city) {
  let apiKey = "1841a154a3444205bo994f2f03567t09";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key={apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-search-action");
  let cityElement = document.querySelector("#women-weed-weather");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#form-search");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Los Angeles");
