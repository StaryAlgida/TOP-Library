let myLibrary = [];
console.log(myLibrary);

let removeBooksListner = NaN;

const addBookButton = document.querySelector("#add-button");
addBookButton.addEventListener('click', () => AddAndDisplay());

const booksContainer = document.querySelector(".books");

function Book(title, author, pages, bookNumber = 0){
    this.title = `"${title}"`;
    this.author = author;
    this.pages = pages;
    this.bookNumber = bookNumber;
    this.isReaded = false;
    this.book = document.createElement("div");
    this.removeButton = document.createElement("button");
}

Book.prototype.displayBook = function() {
    
    this.book.classList.add("book")
    this.book.setAttribute("id", `div-${this.bookNumber}`);

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
    this.removeButton.setAttribute("id", this.bookNumber);

    buttonsContainer.appendChild(isReaded);
    buttonsContainer.appendChild(this.removeButton);

    booksContainer.appendChild(this.book);
}

function AddAndDisplay(){
    addBookToLibrary();
    displayBookInLibrary();
}

function addBookToLibrary(){
    myLibrary.push(new Book("awd", "awd", 123, myLibrary.length))
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

