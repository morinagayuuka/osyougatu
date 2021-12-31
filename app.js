// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('うまく動いてます！');
// });

// // 5000番ポートで待機
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`${PORT}番のポートで待機中です...`);
// });

// 'use strict';
// const number = process.argv[2] || 0;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// var http = require('http');
 
// var server = http.createServer();
// server.on('request', doRequest);
// server.listen(process.env.PORT, process.env.IP);
// console.log('Server running!');
 
// // リクエストの処理
// function doRequest(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World\n');
//     res.end();
// }
// var http = require('http');
 
// var server = http.createServer();
// server.on('request', doRequest);
// server.listen(3000);
// console.log('Server running!');
 
// // リクエストの処理
// function doRequest(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World\n');
//     res.end();
// }
// var http = require('http');
// var fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('osyougatu2023.ejs');
  });
//   res.render('osyougatu2023.ejs');
  
  // トップ画面を表示するルーティングを作成してください
  app.get('/top',(req,res)=>{
    res.render('top.ejs');
  });

// サーバーを起動するコードを貼り付けてください
app.listen(3000);

// var server = http.createServer();
// server.on('request', doRequest);
// server.listen(5000);
// console.log('Server running!');
 
// リクエストの処理
// function doRequest(req, res) {
//     let url = req.url;
//     console.log(url);
//     if ('/' == url) {
//       fs.readFile('./osyougatu/osyougatu2023.html', 'UTF-8', function (err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//       });
//     } else if ('./osyougatu/osyougatu2023.js' == url) {
//       fs.readFile('./osyougatu/osyougatu2023.js', 'UTF-8', function (err, data) {
//         res.writeHead(200, {'Content-Type': 'text/javascript'});
//         res.write(data); 
//         res.end();
//       });

// }


// }


// function getType(_url) {
//     var types = {
//       ".html": "text/html",
//       ".css": "text/css",
//       ".js": "text/javascript",
//       ".png": "image/png",
//       ".gif": "image/gif",
//       ".svg": "svg+xml"
//     }
//     for (var key in types) {
//       if (_url.endsWith(key)) {
//         return types[key];
//       }
//     }
//     return "text/plain";
//   }

// var server = http.createServer();
// server.on('request', doRequest);
// server.listen(5000);
// console.log('Server running!');
 
// リクエストの処理
// function doRequest(req, res) {
//     fs.readFile('osyougatu/osyougatu2023.html', 'UTF-8', 
//     // fs.readFile('osyougatu/hello.html', 'UTF-8', 
//         function(err, data) {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             res.end();
//         });
// }