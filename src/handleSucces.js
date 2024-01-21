// render weather data if the process is successful

export function handleSuccess(processedWeatherData) {
  // render today's weather data
  let currentWeather = document.querySelector(".current");
  currentWeather.innerHTML = `
        <div>
          <div>
            <span id="location">
            <i class="fa-solid fa-location-dot"></i>
            ${processedWeatherData.cityName},<br>
             ${processedWeatherData.cityCountry}
            </span>
          </div>
          <div>
            <i class="fa-regular fa-calendar"></i>
            <span id="currentDate"> Tue, Jan 2, 2024</span>
          </div>
          <div>
            <span id="currentCondition">
            <i class="fa-solid fa-temperature-empty"></i>
            ${processedWeatherData.currentTemp_c}
            </span>
            <span id="currentTemp">${processedWeatherData.description}</span>
          </div>
        </div>
        
        <div>
          <div>
            <h4>
              <i class="fa-solid fa-cloud-rain"></i>
              Ch.O.R
            </h4>
            <p id="chanceOfRain">${processedWeatherData.chanceOfRain}</p>
          </div>
          <div>
            <h4>
              <i class="fa-solid fa-water"></i>
              Humidity
            </h4>
            <p id="humidity">${processedWeatherData.humidity}</p>
          </div>
          <div>
            <h4>
              <i class="fa-solid fa-wind"></i>
              Wind S
            </h4>
            <p id="windSpeed">${processedWeatherData.windSpeedMph}</p>
          </div>
        </div>
    `;

  // render a week's weather data
  const forecastDay = processedWeatherData.forecastDay;
  const weekDays = document.querySelectorAll(".day");
  console.log(weekDays);
  weekDays.forEach((day, index) => {
    let date = formatDate(forecastDay[index].date);
    day.innerHTML = `
          <h3>
            <i class="fa-regular fa-calendar"></i>
            ${date}
          </h3>
          <p>
            <i class="fa-solid fa-temperature-empty"></i>
            ${forecastDay[index].day.avgtemp_c}
          </p>
          <p>
            ${forecastDay[index].day.condition.text}
          </p>
      `;
  });
}

// format the date that comes from weather api
export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
