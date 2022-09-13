
// ---------------------task 1---------------------

// const http = require("http");
// const os = require("os");
// const path = require('path');
// http.createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     let output = `
//     <!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>task1</title>
//         </head>
//         <body>
//             <p>Current username: ${os.userInfo().username}<\p>
//             <p>OS type: ${os.platform()}<\p>
//             <p>System work time: ${Math.floor(os.uptime()/60)} minutes<\p>
//             <p>Current work directory: ${path.dirname(__filename)}<\p>
//             <p>Server file name: ${path.basename(__filename)}<\p>
//         </body>
//     </html>

//     `;
//     res.write(output);
//     res.end();
//   }).listen(5000);

  // ---------------------task 2---------------------

  const http = require('http');
  const os = require("os");
  const personalmodule = require('./personalmodule');

  http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>task2</title>
        </head>
        <body>
            ${personalmodule.inviteUser(os.userInfo().username)}
        </body>
    </html>
    `);
    res.end();
  }).listen(8000);

