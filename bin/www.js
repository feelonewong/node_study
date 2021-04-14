const http = require("http");
const serverHandle = require("../app");
const PORT = 8088;
const server = http.createServer(serverHandle)

server.listen(PORT);