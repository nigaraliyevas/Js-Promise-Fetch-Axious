const weatherCountry = document.querySelector(".weather-country");
const countryField = document.querySelector(".country");
const cityField = document.querySelector(".city");
const forecastField = document.querySelector(".forecast");
const skyCondition = document.querySelector(".sky-condition");
const skyIcon = document.querySelector(".sky-icon");
const skyStatus = document.querySelector(".sky-status");
const notFound = document.querySelector(".not-found");
const btn = document.querySelector("button");
const optionWeather = document.querySelectorAll(".option-weather");
let currentOption = null;
btn.addEventListener("click", function () {
  const value = document.querySelector("#selection").value;
  const choosen = document.querySelector(`#selection option[value=${value}]`).innerHTML;
  fetch(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${weatherCountry.value}`)
    .then(response => response.json())
    .then(data => {
      if (data.location.name.toLowerCase() == weatherCountry.value.toLowerCase()) {
        if (countryField.classList.contains("d-none") && cityField.classList.contains("d-none") && forecastField.classList.contains("d-none") && skyCondition.classList.contains("d-none") && skyIcon.classList.contains("d-none") && skyStatus.classList.contains("d-none")) {
          notFound.innerHTML = "";
          countryField.classList.remove("d-none");
          cityField.classList.remove("d-none");
          forecastField.classList.remove("d-none");
          skyCondition.classList.remove("d-none");
          skyIcon.classList.remove("d-none");
          skyStatus.classList.remove("d-none");
        }
        countryField.innerHTML = "Country: " + data.location.country;
        cityField.innerHTML = "City: " + data.location.name;
        choosen == "Celsius" ? (forecastField.innerHTML = "Weather Forecast: " + data.current.temp_c + "°C") : (forecastField.innerHTML = "Weather Forecast: " + data.current.temp_f + "°F");
        skyCondition.innerHTML = "Sky Condition:";
        const icon = skyIcon.setAttribute("src", data.current.condition.icon);
        skyIcon.append(icon);
        skyStatus.innerHTML = data.current.condition.text;
      }
    })
    .catch(data => {
      notFound.innerHTML = "Not Found";
      countryField.classList.add("d-none");
      cityField.classList.add("d-none");
      forecastField.classList.add("d-none");
      skyCondition.classList.add("d-none");
      skyIcon.classList.add("d-none");
      skyStatus.classList.add("d-none");
    });
});
