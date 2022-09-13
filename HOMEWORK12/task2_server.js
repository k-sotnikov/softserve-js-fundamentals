const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

let booksInJson;
fs.readFile("./task2_books.json", function (err, data) {
    booksInJson = data;
});

http.createServer(function (req, res) {
    let request = url.parse(req.url, true);
    if (request.pathname == '/books.json') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS'
          });
        res.write(booksInJson);
        res.end();
    }

}).listen(8080);