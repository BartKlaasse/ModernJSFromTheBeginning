// Initialize Weather class
const weather = new Weather('Den Helder', 'Nederland');
//Init ui
const ui = new UI();

// Event listener: get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}
