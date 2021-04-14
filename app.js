const handleUserRouter = require("./src/router/user");
const handleBlogRouter = require("./src/router/blog");
const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/json");
  const { url } = req;
  req.path = url.split("?")[0];

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
  res.writeHead(404, {"Content-type":"text/plain;charset=utf-8"});
  res.write("404 NOT FOUND");
  res.end();
};

module.exports = serverHandle;
