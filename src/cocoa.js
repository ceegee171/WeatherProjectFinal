function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-search-action");
  let cityElement = document.querySelector("#women-weed-weather");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#form-search");
searchFormElement.addEventListener("submit", handleSearchSubmit);
