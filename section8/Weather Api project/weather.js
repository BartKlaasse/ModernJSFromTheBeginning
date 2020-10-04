class Weather {
  constructor(city, country) {
    this.apiKey = '2dab72bde26c6e7ef2f959903c65008a';
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  // change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
