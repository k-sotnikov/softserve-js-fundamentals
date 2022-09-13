// ---------------------task 1---------------------
const http = require('http');
const url = require('url');
const task1_server_module = require('./task1_server_module');

http.createServer(function (req, res) {
    let request = url.parse(req.url, true);
    if (request.query.status === 'ok') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS'
          });
        res.write(task1_server_module.tellTheAnswerWithDate("Your vote is accepted"));
        res.end();
    }

}).listen(3000);













// ---------------------task 2---------------------