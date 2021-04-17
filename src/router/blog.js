const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resData");
const handleBlogRouter = (req, res) => {
  const { method } = req;
  const id = req.query.id || "";
  const author = req.query.author || "";
  const keyword = req.query.keyword || "";

  if (method === "GET" && req.path === "/api/blog/list") {
    const result = getList(author, keyword);
    return result.then((res, req) => {
      return new SuccessModel(res);
    });
  }

  if (method === "GET" && req.path === "/api/blog/detail") {
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }

  if (method === "POST" && req.path === "/api/blog/create") {
    const data = newBlog(req.body);
    return new SuccessModel(data);
  }
  if (method === "POST" && req.path === "/api/blog/update") {
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("博客更新失败");
    }
  }

  if (method === "POST" && req.path === "/api/blog/del") {
    const result = delBlog(id);
    if (result) {
      return new SuccessModel();
    } else {
      return new ErrorModel("删除博客失败");
    }
  }
};

module.exports = handleBlogRouter;
