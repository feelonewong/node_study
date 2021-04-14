const handleUserRouter = (req, res) => {
  const { method } = req;
  

  if (method === "POST" && req.path === "/api/user/login") {
    return {
      data: "这是登录接口",
    };
  }
};

module.exports = handleUserRouter;
