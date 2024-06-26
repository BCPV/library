let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function render() {
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <div id="slot">
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="toggle-read-button" onclick=(toggleRead(${i}))>Read</button>
                <button class="remove-btn"  onclick="removeBook(${i})">Remove</button>
            </div>
        </div>
        `;

        libraryBook.appendChild(bookEl);
    }
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
} 

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

let addBookBtn = document.querySelector("#addBookBtn");

addBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("form");
    newBookForm.style.display = "block";
})

document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    let newBookForm = document.querySelector("form");
    newBookForm.style.display = "none";
})

