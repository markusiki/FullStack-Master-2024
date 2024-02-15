// Step 1: Import the HTTP module
const http = require('http')
const PORT = 3001
// Import the url module
const url = require('url')

// Step 2: Crete the server using the http.creteServer() method
const server = http.createServer((req, res) => {
  //  Parse the request url
  const reqUrl = url.parse(req.url).pathname
  if (reqUrl == '/') {
    res.write('Olet hakemistossa /')
    res.end()
  }
  else if (reqUrl == '/hello') {
    res.write('Olet hakemistossa /hello') 
    res.end()
  }
  else {
    res.write('Hakemaasi sivua ei löydy - 404 Not Found')
    res.end()
  }
  
})
// Step 5: Bind the server to a spesific port and start listening for incoming connections
server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
// Step 6: Open the terminal and run the file using the command node 01_http_server.js