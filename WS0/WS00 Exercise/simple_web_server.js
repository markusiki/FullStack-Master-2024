var http = require("http");
var fs = require("fs");

http
  .createServer((request, response) => {
    fs.readFile("table.html", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/HTML; charset=utf-8" });
      response.write(data);
      response.end("<h1>Hello World\n</h1>");
    });
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081");
