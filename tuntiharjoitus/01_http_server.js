// Step 1: Import the HTTP module
const http = require('http')
const PORT = 3000

// Step 2: Crete the server using the http.creteServer() method
const server = http.createServer((req, res) => {
  // Step 3: Set the response headers
  res.writeHead(200, {'Constent-Type': 'text/plain'})
  // Step 4: Send the response body
  res.end('Hello World!')
})
// Step 5: Bind the server to a spesific port and start listening for incoming connections
server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
// Step 6: Open the terminal and run the file using the command node 01_http_server.js