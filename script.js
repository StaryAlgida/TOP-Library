let myLibrary = [];
console.log(myLibrary);

let removeBooksListner = NaN;

const addBook = document.querySelector("#add-book");
addBook.addEventListener("click", () => {
    AddAndDisplay();
});

const booksContainer = document.querySelector(".books");

function Book(title, author, pages, bookNumber = 0){
    this.title = `"${title}"`;
    this.author = author;
    this.pages = `Pages: ${pages}`;
    this.bookNumber = bookNumber;
    this.isReaded = false;
    this.book = document.createElement("div");
    this.removeButton = document.createElement("button");
}

Book.prototype.displayBook = function() {
    
    this.book.classList.add("book")
    this.book.setAttribute("id", `div-${this.bookNumber}`);
    setRandomColor(this.book);


    let info = document.createElement("div");
    info.classList.add("info");
    this.book.appendChild(info);

    let arrayOfinfo = [];
    for(let i = 0; i < 3; i++){
        arrayOfinfo.push(document.createElement("span"));
        arrayOfinfo[i].classList.add("user-data");
    }
    arrayOfinfo[0].innerText = this.title;
    arrayOfinfo[1].innerText = this.author;
    arrayOfinfo[2].innerText = this.pages;
    arrayOfinfo.forEach((e) => info.appendChild(e));
    
    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons");
    this.book.appendChild(buttonsContainer);

    let isReaded = document.createElement("button");
    isReaded.classList.add("readed", "but");
    isReaded.innerText = "Not readed";

    this.removeButton.addEventListener("click", () =>{
        removeBook(this.bookNumber);
    });
    this.removeButton.classList.add("remove", "but");
    this.removeButton.innerText = "Remove";

    buttonsContainer.appendChild(isReaded);
    buttonsContainer.appendChild(this.removeButton);

    booksContainer.appendChild(this.book);
}

function getRandomColor(){
    return Math.floor(Math.random() * 256)
}

function setRandomColor(bookContainer){
    bookContainer.style.background = `rgb(${getRandomColor()}, ${getRandomColor()} , ${getRandomColor()}, 0.50 )`;
}

function AddAndDisplay(){
    addBookToLibrary();
    displayBookInLibrary();
}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    myLibrary.push(new Book(title, author, pages, myLibrary.length))
    console.log(myLibrary);    
}

function displayBookInLibrary(){ // do zmainy
    myLibrary.at(-1).displayBook();
}

function removeBook(rmButton){
    document.getElementById(`div-${rmButton}`).remove();
    let bookId = 0;

    for(let i = 0; i < myLibrary.length; i++){
        if (myLibrary.bookNumber == rmButton){
            bookId = i;
            break;
        }
    }

    if(myLibrary.length > 1){
        myLibrary.splice(bookId, 1);
    }
    else{
        myLibrary.pop();
    }
}

