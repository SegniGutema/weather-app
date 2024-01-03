export default function handleError(error) {
  document.querySelector(".current").innerHTML =
    `Oophs! No weather data for today
  ${error}`;
  document.querySelectorAll(".day").forEach(
    (day) =>
      (day.innerHTML = `Oophs! No weather data for this day
  ${error}`)
  );
}
