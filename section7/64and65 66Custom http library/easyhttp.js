function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Get request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // because this.http.status does not work due to function scoping, we assign the value of this to self and then we can get the status code
      callback(null, self.http.responseText);
    } else {
      callback(`Error:${self.http.status}`);
    }
  };
  this.http.send();
};

// Post Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-Type", "application/json");

  const self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Put Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-Type", "application/json");

  const self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Delete Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // because this.http.status does not work due to function scoping, we assign the value of this to self and then we can get the status code
      callback(null, "Post deleted");
    } else {
      callback(`Error:${self.http.status}`);
    }
  };
  this.http.send();
};
