// ---------------------task 1---------------------

const { Http2ServerRequest } = require("http2");

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
        alert("Error");
    };
}

// ---------------------task 2---------------------
let downloadBooksBtn = document.querySelector('#downloadBooksBtn');

downloadBooks.addEventListener("click", downloadBooks);

function downloadBooks() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:8080/books.json');
    xhttp.send();

    xhttp.onload = function () {
        downloadBooksBtn.innerHTML = JSON.parse(xhttp.responseText);
    };

    xhttp.onerror = function () {
        alert('Error');
    };
}