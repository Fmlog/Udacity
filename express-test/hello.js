"use strict";
//this is a node server
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, "success", { "Content-type": "text/plain" });
  res.end("Eko world\n")
});

server.listen(port,hostname, function(){
    console.log(`server running at http://${hostname}:${port}`)
})
