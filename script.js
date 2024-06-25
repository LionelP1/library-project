let library = [];


function Book(title, author, pages, read = false) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}


//Adds a book to the screen
function addBookToLibrary(bookObject) {
    //To do later
}

//Adds all books to the screen
function outputAllBooks() {
    //To do later
}

const bookForm = document.getElementById('bookForm');

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
}