let myLibrary = [];
let counter = 2;

class Book {
  constructor(name, author, pages, read, id) {
    // the constructor...
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
}

function addBookToLibrary() {
  // do stuff here
  let bName = document.getElementById("bname").value;
  let bAuthor = document.getElementById("bauthor").value;
  let bPages = document.getElementById("bpages").value;
  let bRead = document.getElementById("bread").value;
  bRead = bRead == "on" ? "Yes" : "No";
  counter++;
  myLibrary.push(new Book(bName, bAuthor, bPages, bRead, counter));

  displayLibrary();
}

// Display all of the library in a table
function displayLibrary() {
  //document.getElementById('dtable').innerHTML = ''
  var myTable = document.getElementById('dtable');
  var rowCount = myTable.rows.length; while(--rowCount) myTable.deleteRow(rowCount);

  // Get the table from HTML
  var table = document.getElementById("dtable");

  // Go through all of the library
  for(var i=0; i<myLibrary.length; i++) {
      
      // add new row and cell per entry
      var row = table.insertRow(-1);
      // book name
      var cell1 = row.insertCell(0);
      cell1.innerHTML = myLibrary[i].name;
      // book author
      var cell2 = row.insertCell(1);
      cell2.innerHTML = myLibrary[i].author;
      // book pages
      var cell3 = row.insertCell(2);
      cell3.innerHTML = myLibrary[i].pages;
      // book read
      var cell4 = row.insertCell(3);
      cell4.innerHTML = myLibrary[i].read;
      
      // delete book
      var cell5 = row.insertCell(4);
      cell5.innerHTML = '<button id="btn'+myLibrary[i].id + '" name="btn'+myLibrary[i].id+'" >Delete</button>';

      // change read status
      var cell6 = row.insertCell(5);
      cell6.innerHTML = '<button id="btn'+myLibrary[i].id + 'read" name="btn'+myLibrary[i].id+'read" >Change</button>';

      let currentBtn = i;
      
      var btn = document.getElementById("btn"+myLibrary[i].id);        
      btn.addEventListener("click", function () {
          deleteBook(myLibrary[currentBtn].id);
        });

      var btnRead = document.getElementById("btn"+myLibrary[i].id+"read");   
      btnRead.addEventListener("click", function () {
        changeReadStatus(myLibrary[currentBtn].id);
      });
  }
}

function deleteBook(id){
  for(var i=0; i<myLibrary.length; i++){
    if (myLibrary[i].id == id) {
      myLibrary.splice(i, 1);
      displayLibrary();
    }
  }
}

function changeReadStatus(id){
  for(var i=0; i<myLibrary.length; i++){
    let myBook = myLibrary[i];
    if (myBook.id == id) {
      if(myBook.read == "Yes") {
        console.log("not read");
        myBook.read == "No"
      } else {
        console.log("read");
        myBook.read == "Yes"
      }
      displayLibrary();
    }
  }

}

myLibrary.push(new Book("Book1", "Author1", "30", "Yes", 0));
myLibrary.push(new Book("Book2", "Author2", "35", "No", 1));
myLibrary.push(new Book("Book3", "Author3", "40", "Yes", 2));

requestAnimationFrame(() => {
  // this will be called just before the next video frame.
  // That will be after any changes to the DOM have been completed.
  displayLibrary();
});


