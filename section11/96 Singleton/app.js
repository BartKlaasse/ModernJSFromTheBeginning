// Singleton pattern
// Will always return same instance

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Object Instance' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// Both instances will be the same
console.log(instanceA === instanceB);
