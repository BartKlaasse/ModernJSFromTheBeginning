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
      //   { id: 0, name: 'Steak', calories: 1200 },
      //   { id: 0, name: 'Cookie', calories: 750 },
      //   { id: 2, name: 'Eggs', calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };
  // Public Methods
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let ID;
      // Create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);
      // Create new item
      newItem = new Item(ID, name, calories);
      // Add to items array in data
      data.items.push(newItem);
      return newItem;
    },
    getItemById: function (id) {
      let found = null;
      // Loop through items in data
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    getTotalCalories: function () {
      let total = 0;
      // Loop through items and add calories
      data.items.forEach(function (item) {
        total += item.calories;
      });
      // Set totalCalories value in dataobject to total ammount of calories
      data.totalCalories = total;
      // Return total
      return data.totalCalories;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
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
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
  };
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
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    addListItem: function (item) {
      // Show list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create LI element
      const li = document.createElement('li');
      // Add classes
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;

      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong><em>${item.calories} calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i> </a>`;
      // Insert item in list
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();
// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();
    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    // Edit icon click event listener
    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);
  };
  // Add item submit function
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();
    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to ui list
      UICtrl.addListItem(newItem);
      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to ui
      UICtrl.showTotalCalories(totalCalories);
      //Clear input fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  };
  // Update item submit function
  const itemUpdateSubmit = function (e) {
    if (e.target.classList.contains('edit-item')) {
      // Get list item id
      const listId = e.target.parentNode.parentNode.id;
      // Split string into an array
      const listIdArr = listId.split('-');
      // Get actual id
      const id = parseInt(listIdArr[1]);

      // Get item to update
      const itemToEdit = ItemCtrl.getItemById(id);
      // set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  };
  // Public Methods
  return {
    init: function () {
      console.log('Initializing app');
      // Set initial state
      UICtrl.clearEditState();
      // Fetch items from datastructure
      const items = ItemCtrl.getItems();
      // Check if items are available
      if (items.length === 0) {
        // Hide list
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }
      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to ui
      UICtrl.showTotalCalories(totalCalories);
      // Load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

// Inititalize App
App.init();
