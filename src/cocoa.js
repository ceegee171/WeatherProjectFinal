function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let date = new Date(response.data.time * 1000);
  let timeElement = document.querySelector("#time");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  windSpeedElement.innerHTML = response.data.wind.speed;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
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
  let day = days[date.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "1841a154a3444205bo994f2f03567t09";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-search-input");

  searchCity(searchInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp + 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "1841a154a3444205bo994f2f03567t09";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let days = ["Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
     <div class="weather-forecast-day">
          <div class="col-2">
            <div class="weather-forecast-date">${formatDay(day.time)}</div>
            <img src="${
              day.condition.icon_url
            }" class="weather-forecast-icon" /> 
            <div class="weather-forecast-temperature">
              <span class="weather-forecast-temperature-max"><strong> ${Math.round(
                day.temperature.maximum
              )}°</strong></span>
              <span class="weather-forecast-temperature-min"> <strong> ${Math.round(
                day.temperature.minimum
              )}°</strong></span>
            </div>
          </div>
        </div>
        `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
displayForecast();
searchCity("Paris");
getForecast();

let searchFormElement = document.querySelector("#form-search-action");
searchFormElement.addEventListener("submit", handleSearchSubmit);
