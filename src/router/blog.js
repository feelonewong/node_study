const { getList, getDetail } = require("../controller/blog");
const { SuccessModel } = require("../model/resData");
const handleBlogRouter = (req, res) => {
  const { method } = req;
  const id = req.query.id || "";
  const author = req.query.author || "";

  if (method === "GET" && req.path === "/api/blog/list") {
    const blogData = getList(author, id);
    return new SuccessModel(blogData);
  }

  if (method === "GET" && req.path === "/api/blog/detail") {
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
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
