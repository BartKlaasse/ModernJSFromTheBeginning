class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Den Haag';
    this.defaultCountry = 'Nederland';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('country') === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country,
    };
  }
  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}
