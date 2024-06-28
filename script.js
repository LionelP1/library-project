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
    let isReadColor = "#ff7f7f";
    let buttonText = 'Not Read';

    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    if(bookObject.read){
        isReadColor = '#90ee90';
        buttonText = 'Read';
    }

    title.textContent = `Title: ${bookObject.title}`;
    author.textContent = `Author: ${bookObject.author}`;
    pages.textContent = `Pages: ${bookObject.pages}`;
    readBtn.textContent = buttonText;
    readBtn.style.backgroundColor = isReadColor;
    removeBtn.textContent = 'Remove';

    bookCard.classList.add('book-card');
    readBtn.classList.add('card-button');
    removeBtn.classList.add('card-button');
    readBtn.id = 'readBtn';
    removeBtn.id = 'removeBtn';
    bookCard.id = `book-${bookObject.bookId}`;

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(readBtn)
    bookCard.appendChild(removeBtn)
    bookGrid.appendChild(bookCard)
    removeBtn.addEventListener('click', () => {removeBook(bookObject.bookId)});
    readBtn.addEventListener('click', () => {
        if(bookObject.read){
            bookObject.read = false;
            readBtn.style.backgroundColor = "#ff7f7f";
            readBtn.textContent = 'Not Read';
        }else{
            bookObject.read = true;
            readBtn.style.backgroundColor = "#90ee90";
            readBtn.textContent = 'Read';
        }
    });
}



function removeBook(bookId){
    //Remove from array
    const bookIndex = library.findIndex(book => book.bookId === bookId);
    library.splice(bookIndex, 1);

    //Remove from screen
    const bookToRemove = document.getElementById(`book-${bookId}`);
    bookToRemove.remove();
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

const addBook = document.querySelector(".bookBtn");



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