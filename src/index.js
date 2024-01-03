import { processWeatherData, getWeather } from "./weather.js";
import { handleSuccess } from "./handleSucces.js";
import handleError from "./handleError.js";
import "./styles.css";

async function render(city) {
  try {
    const rawWeatherData = await getWeather(city);
    console.log(rawWeatherData);
    const processedWeatherData = processWeatherData(rawWeatherData);
    handleSuccess(processedWeatherData);
  } catch (error) {
    handleError(error);
  }
}

async function getUserInput() {
  const cityInput = document.querySelector("input[type=search]");
  cityInput.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      const city = cityInput.value.trim();
      render(city);
    }
  });
}

render("addis-ababa");
getUserInput();
