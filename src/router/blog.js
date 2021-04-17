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
    const result = getDetail(id);
    return result.then((res) => {
      console.log(res)
      return new SuccessModel(res);
    });
  }

  if (method === "POST" && req.path === "/api/blog/create") {
    const result = newBlog(req.body);
    return result.then(res=>{
      return new SuccessModel(res.insertId);
    })
  }
  if (method === "POST" && req.path === "/api/blog/update") {
    const result = updateBlog(id, req.body);
    return result.then( res=>{
      if(res.affectedRows>0){
        return new SuccessModel(true)
      }else{
        return new ErrorModel(false)
      }
    })
    
  }

  if (method === "POST" && req.path === "/api/blog/del") {
    const author = "张三";
    const result = delBlog(author,id);
    return result.then(res=>{
      if(res.affectedRows>0){
        return new SuccessModel(true)
      }else{
        return new ErrorModel(false)
      }
    })
    // if (result) {
    //   return new SuccessModel();
    // } else {
    //   return new ErrorModel("删除博客失败");
    // }
  }
};

module.exports = handleBlogRouter;
