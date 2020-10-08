// Module and Revealing module pattern
//Basic structure

// (function () {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   };
// })();

// Standard module pattern
const UICtrl = (function () {
  //Private vars and functions
  let text = 'Hello World';

  const changeText = function () {
    const element = document.querySelector('h2');
    element.textContent = text;
  };
  return {
    // Public vars and functions
    callChangeText: function () {
      // public functions can be used to call private functions from the return block
      changeText();
      console.log(text);
    },
  };
})();

// Call the UICtrl function
UICtrl.callChangeText();

// Revealing module pattern
const ItemCtrl = (function () {
  let data = [];
  function add(item) {
    data.push(item);
    console.log('add');
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
    // All the properties declared in return will become public
  };
})();

ItemCtrl.add({ id: 1, name: 'john' });
ItemCtrl.add({ id: 2, name: 'Joey' });
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
