// fetch a weather data for a given city
export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=715d7cd2890d4b0eaa163430232812&q=${city}&days=7`
    );
    if (!response.ok) {
      throw new Error(`Http error, Status : ${response.status}`);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error(" Error fetching the weather data");
  }
}

//  a function that processes the data recieved from get weather data
export function processWeatherData(rawWeatherData) {
  try {
    return {
      forecastDay: rawWeatherData.forecast.forecastday,
      cityName: `${rawWeatherData.location.name}`,
      cityCountry: `${rawWeatherData.location.country}`,
      currentTemp_c: `${rawWeatherData.current.temp_c} C`,
      currentTemp_f: `${rawWeatherData.current.temp_f} F`,
      description: `${rawWeatherData.current.condition.text}`,
      humidity: `${rawWeatherData.current.humidity} mm`,
      windSpeedMph: `${Math.round(rawWeatherData.current.wind_mph)} mph`,
      chanceOfRain: `${rawWeatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    };
  } catch (error) {
    throw new Error(error);

    // Display an error message to the user
  }
}
