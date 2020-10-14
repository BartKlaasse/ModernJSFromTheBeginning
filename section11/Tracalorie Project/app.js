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
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();
// UI Controller
const UICtrl = (function () {
  // Static typed text for ui selectors
  const UISelectors = {
    itemList: '#item-list',
  };
  console.log('UI Controller');
  // Public Methods
  return {
    populateItemList: function (items) {
      let html = '';
      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong><em>${item.calories} calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i> </a>
        </li>`;
      });
      // Insert List Items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
  };
})();
// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Public Methods
  return {
    init: function () {
      console.log('Initializing app');
      // Fetch items from datastructure
      const items = ItemCtrl.getItems();
      // Populate list with items
      UICtrl.populateItemList(items);
    },
  };
})(ItemCtrl, UICtrl);

// Inititalize App
App.init();
