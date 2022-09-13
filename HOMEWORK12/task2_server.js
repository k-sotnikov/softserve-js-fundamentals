const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

let booksInJson;
fs.readFile("./task2_books.json", function (err, data) {
    booksInJson = data;
});
console.log(booksInJson);

http.createServer(function (req, res) {
    http.writeHead(200, {});
    
}).listen(8080);