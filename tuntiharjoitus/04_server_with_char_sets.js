// Step 1: Import the HTTP module
const http = require("http")
const PORT = 3000
// Import the url module
const url = require("url")

// Step 2: Crete the server using the http.creteServer() method
const server = http.createServer((req, res) => {
  //  Parse the request url
  const reqUrl = url.parse(req.url).pathname
  if (reqUrl == "/") {
    res.setHeader("Content-Type", "text-plain; charset=utf-8")
    res.writeHead(200)
    res.write("Olet hakemistossa /")
    res.end()
  } else if (reqUrl == "/hello") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }) // Vaihtoehtoinen tapa
    res.write("<h1>Olet hakemistossa /hello</h1>")
    res.end("<h2>... ja sillä selvä... </h2>")
  } else {
    res.setHeader("Content-Type", "application/json; charset=utf-8")
    res.write(`{"message":"Hakemaasi sivua ei löydy - 404 Not Found"}`)
    res.end(`{"text":"This is a JSON response"}`)
  }
})
// Step 5: Bind the server to a spesific port and start listening for incoming connections
server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
// Step 6: Open the terminal and run the file using the command node 01_http_server.js
