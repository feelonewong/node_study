const http = require("http");
const PORT = 8088;
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const { method } = req;
  const { url } = req;
  const path = url.split("?")[0];
  const query = querystring.parse(url.split("?")[1]);
  res.setHeader("Content-Type", "application/json");

  const resData = {
    method,
    url,
    path,
    query,
  };
  if (method === "GET") {
    res.end(JSON.stringify(resData));
  } else if (method === "POST") {
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      res.end(postData);
    });
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${PORT}`);
  }
});
