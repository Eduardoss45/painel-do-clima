const key = "6d9ca9a59df8b103a151fc1069114128";
const search = document.querySelector(".search-city");
const infoContainer = document.querySelector(".info-container");

async function searchCity() {
  try {
    const city = search.value.toLowerCase();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    );
    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayWeather(data) {
  infoContainer.querySelector(
    ".city-name"
  ).textContent = `Tempo em ${data.name}`;
  infoContainer.querySelector(".temperature").textContent = `${Math.round(
    data.main.temp
  )}°C`;
  infoContainer.querySelector(
    ".image-weather"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  infoContainer.querySelector(".weather-text").textContent =
    data.weather[0].description;
  infoContainer.querySelector(
    ".moisture"
  ).textContent = `Umidade: ${data.main.humidity}%`;
}
