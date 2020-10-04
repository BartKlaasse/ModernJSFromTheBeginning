// Initialize Weather class
const weather = new Weather('Den Helder', 'Nederland');

// Event listener: get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
