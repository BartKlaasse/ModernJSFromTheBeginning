class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  addBookToList(book) {
    console.log('Added book to list', book);
    const list = document.getElementById('book-list');
    // Create a TR element
    const row = document.createElement('tr');
    //Insert colums
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }
  showAlert(message, className) {
    //Create a div
    const div = document.createElement('div');
    //Add classnames
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent element
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);

    //set timeout to hide alert
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}
//Event listener for Add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  //instantiating a book
  const book = new Book(title, author, isbn);
  //Instantiate ui
  const ui = new UI();
  //Validate
  if (title === '' || author === '' || isbn === '') {
    //Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    //Add book to list
    ui.addBookToList(book);

    //show sucess alert
    ui.showAlert('Book added', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
//Event listener for delete book
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  //show message
  ui.showAlert('Book deleted', 'success');
  e.preventDefault();
});
