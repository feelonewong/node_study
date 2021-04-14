const handleUserRouter = (req, res) => {
  const { method } = req;
  const { url } = req;
  const path = url.split("?")[0];

  if (method === "POST" && path === "/api/user/login") {
    return {
      data: "这是登录接口",
    };
  }
};

module.exports = handleUserRouter;
