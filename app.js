const handleUserRouter = require("./src/router/user");
const handleBlogRouter = require("./src/router/blog");
const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/json");

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
};

module.exports = serverHandle;
