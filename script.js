let library = [];

let uniqueId = 0;


function Book(bookId,title, author, pages, read = false) {
    this.bookId = bookId,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}


//Adds a book to the screen
function addBookToLibrary(bookObject) {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    title.textContent = `Title: ${bookObject.title}`;
    author.textContent = `Author: ${bookObject.author}`;
    pages.textContent = `Pages: ${bookObject.pages}`;
    removeBtn.textContent = 'Remove';

    bookCard.classList.add('book-card')
    bookCard.id = `book-${bookObject.bookId}`;
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    removeBtn.addEventListener('click', () => {removeBook(bookObject.bookId)});
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    bookGrid.appendChild(bookCard)
}

function removeBook(bookId){
    //Remove from array
    const bookIndex = library.findIndex(book => book.bookId === bookId);
    library.splice(bookIndex, 1);

    //Remove from screen
    const bookToRemove = document.getElementById(`book-${bookId}`);
    bookToRemove.remove();
}



//Adds all books to the screen
function outputAllBooks() {
    //To do later
}

const bookForm = document.getElementById('bookForm');
const bookGrid = document.querySelector('.book-grid');

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleFormSubmit();
});

function handleFormSubmit (){
    let titleInput = document.getElementById('title').value;
    let authorInput = document.getElementById('author').value;
    let pagesInput = parseInt(document.getElementById('pages').value);
    let isReadInput = document.getElementById('isRead').checked;
    const newBook = new Book(uniqueId++,titleInput, authorInput, pagesInput, isReadInput);
    library.push(newBook);
    addBookToLibrary(newBook);
    bookForm.reset();
    closeModal();
}






const modal = document.querySelector(".modal");

const addBook = document.querySelector(".add-book-btn");



addBook.addEventListener('click', () => {
    modal.style.display = "block";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
      closeModal();
    }
});

function closeModal(){
    modal.style.display = "none";
}