let library = [];


function Book(title, author, pages, read = false) {
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
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    bookGrid.appendChild(bookCard)
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
    const newBook = new Book(titleInput, authorInput, pagesInput, isReadInput);
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