const handleUserRouter = require("./src/router/user");
const handleBlogRouter = require("./src/router/blog");
const querystring = require("querystring");

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }

    let postdata = "";
    req.on("data", (chunk) => {
      postdata += chunk;
    });

    req.on("end", () => {
      if (!postdata) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postdata));
    });
  });
};

const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/json");
  const { url } = req;
  req.path = url.split("?")[0];
  req.query = querystring.parse(url.split("?")[1]);

  getPostData(req).then((postData) => {
    req.body = postData;

    const userData = handleUserRouter(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      res.end(JSON.stringify(blogData));
      return;
    }

    //处理未找到路由的接口
    res.writeHead(404, { "Content-type": "text/plain;charset=utf-8" });
    res.write("404 NOT FOUND");
    res.end();
  });
};

module.exports = serverHandle;
