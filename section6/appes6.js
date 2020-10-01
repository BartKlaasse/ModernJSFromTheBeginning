class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  addBookToList(book) {
    console.log("Added book to list", book);
    const list = document.getElementById("book-list");
    // Create a TR element
    const row = document.createElement("tr");
    // Insert colums
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create a div
    const div = document.createElement("div");
    // Add classnames
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent element
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    // insert alert
    container.insertBefore(div, form);

    // set timeout to hide alert
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}
// Local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// Event listener for dom load event
document.addEventListener("DOMContentLoaded", Store.displayBooks);
// Event listener for Add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  // instantiating a book
  const book = new Book(title, author, isbn);
  // Instantiate ui
  const ui = new UI();
  // Validate
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Add to localstorage
    Store.addBook(book);

    // show sucess alert
    ui.showAlert("Book added", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
// Event listener for delete book
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);

  // Remove from localstorage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // show message
  ui.showAlert("Book deleted", "success");
  e.preventDefault();
});
