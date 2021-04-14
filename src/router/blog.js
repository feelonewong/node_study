const handleBlogRouter = (req, res) => {
  const { method } = req;

  if (method === "GET" && req.path === "/api/blog/list") {
    return {
      data: "获取博客列表接口",
    };
  }

  if (method === "GET" && req.path === "/api/blog/detail") {
    return {
      data: "获取博客详情",
    };
  }

  if (method === "POST" && req.path === "/api/blog/create") {
    return {
      data: "新建博客",
    };
  }
  if (method === "POST" && req.path === "/api/blog/edit") {
    return {
      data: "修改博客",
    };
  }

  if (method === "POST" && req.path === "/api/blog/del") {
    return {
      data: "删除博客",
    };
  }
};

module.exports = handleBlogRouter;
