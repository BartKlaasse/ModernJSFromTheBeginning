// Init storage class
const storage = new Storage();
//Get Stored location data
const weatherLocation = storage.getLocationData();

// Initialize Weather class
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Init ui
const ui = new UI();

// Event listener: get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// Event listener save location button
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  // Set location in LocalStorage
  storage.setLocationData(city, country);

  //Get and display weather again
  getWeather();
  // Close the modal with jquery
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}
