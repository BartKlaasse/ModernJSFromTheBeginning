// Observer Pattern
// Can be used to notify the dom if stuff has changed
class EventObserver {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    //
    this.observers.push(fn);
    console.log(` You are now subscribed to ${fn.name}`);
  }
  unsubscribe(fn) {
    //
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`you are now unsubscribed from ${fn.name}`);
  }
  fire() {
    //
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

// instantiate observer
const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrMilliSeconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurrMilliSeconds);
});
document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurrSeconds);
});
document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// Click handler
const getCurrMilliSeconds = function () {
  console.log(`Current Milliseconds ${new Date().getMilliseconds()}`);
};

// Click handler
const getCurrSeconds = function () {
  console.log(`Current seconds ${new Date().getSeconds()}`);
};
