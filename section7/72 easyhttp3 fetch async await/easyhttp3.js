//EasyHttp v2

class EasyHTTP {
  // make a http get request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
  // make a http post request
  async post(url, data) {
    const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const resData = await response.json();
    return resData;
  }

  // make a put request
  async put(url, data) {
    const response = await fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const resData = await response.json();
    return resData;
  }

  // make a delete request
  async delete(url) {
    const response = await fetch(url, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } });
    const resData = await 'Resource deleted';
    return resData;
  }
}
