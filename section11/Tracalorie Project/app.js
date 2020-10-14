// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  // Data structure / state
  const data = {
    items: [
      { id: 0, name: 'Steak', calories: 1200 },
      { id: 0, name: 'Cookie', calories: 750 },
      { id: 2, name: 'Eggs', calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };
  // Public Methods
  return {
    logData: function () {
      return data;
    },
  };
})();
// UI Controller
const UICtrl = (function () {
  console.log('UI Controller');
  // Public Methods
  return {};
})();
// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Public Methods
  return {
    init: function () {
      console.log('123');
    },
  };
})(ItemCtrl, UICtrl);

// Inititalize App
App.init();
