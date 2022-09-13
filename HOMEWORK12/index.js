// ---------------------task 1---------------------

const xhttp = new XMLHttpRequest();

const voteBtn = document.querySelector("#voteBtn");
voteBtn.addEventListener("click", loadDoc);

function loadDoc () {
    const xhttp = new XMLHttpRequest();


    xhttp.open("GET", "http://localhost:3000/vote.html?status=ok");
    xhttp.send();

    xhttp.onload = function () {
        document.querySelector("#voteBtn").textContent = xhttp.responseText;
    };

    xhttp.onerror = function() {
        alert("Run task1_server.js");
    };
}

// ---------------------task 2---------------------
let downloadBooksBtn = document.querySelector('#downloadBooksBtn');

downloadBooksBtn.addEventListener("click", downloadBooks);

function downloadBooks() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:8080/books.json');
    xhttp.send();

    xhttp.onload = function () {
         let booksArray = JSON.parse(xhttp.responseText);
         let authors = "";
         for (const iterator of booksArray) {
            authors += `<li>${iterator}</li>
            `;
         }
         downloadBooksBtn.innerHTML = `<ul>
         ${authors}
         </ul>`;
    };

    xhttp.onerror = function () {
        alert('Run task2_server.js');
    };
}