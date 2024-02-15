
var http = require('http')
var fs = require('fs')

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/HTML'})
    if (request.url === '/helloworld') {
      response.write('<h1>Hello World in HTML</h1>')
    }
    else if (request.url === '/homepage') {
      response.write('<h1>HOMEPAGE</h1>')
    }
    response.end()
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081')