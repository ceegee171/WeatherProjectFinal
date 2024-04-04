function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-search-input");
  let cityElement = document.querySelecotr("#women-weed-weather");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#form-search");
searchFormElement.addEventListener("submit", handleSearchSubmit);
