const btnAddBook = document.getElementById("btn-add-book");
const bookForm = document.getElementById("book-form");
const libraryContainer = document.getElementById("library");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read); 
    myLibrary.push(newBook); 
    displayBooks(); 
}

function displayBooks() {
    libraryContainer.innerHTML = ""; 

    myLibrary.forEach((book, index) => {
      
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
            <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryContainer.appendChild(bookCard);
    });
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read; // Toggle the read status
    displayBooks(); // Update the display
}


function removeBook(index) {
    myLibrary.splice(index, 1); // Remove the book at the specified index
    displayBooks(); // Update the display
}


btnAddBook.addEventListener("click", () => {
    bookForm.style.display = "block"; 
});


bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);

    bookForm.reset();
    bookForm.style.display = "none";
});


displayBooks();