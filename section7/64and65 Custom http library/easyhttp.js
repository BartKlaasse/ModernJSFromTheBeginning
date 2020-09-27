function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Get request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      //because this.http.status does not work due to function scoping, we assign the value of this to self and then we can get the status code
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status);
    }
  };
  this.http.send();
};
// Post Request

// Put Request

// Delete Request
