const { SuccessModel, ErrorModel } = require("../model/resData");
const { loginCheck  } = require("../controller/user");

const getCookieExpires = ()=>{
  const d  = new Date();
  d.setTime(d.getTime() + (24*60*60*1000) );
  return d.toGMTString();
}

const handleUserRouter = (req, res) => {
  const { method } = req;
  if (method === "POST" && req.path === "/api/user/login") {
    const {username, password} = req.body;
    const result = loginCheck( username, password );
    return result.then( data=>{
      if(data.length === 0){

        return new ErrorModel("登录失败");
      }
      if(data[0].username){
        res.setHeader("Set-Cookie",`username=${username};path=/;httpOnly;expires=${getCookieExpires}`)
        return new SuccessModel(true);
      }
      
    })
    // if(result){
    //   return new SuccessModel();
    // }else{
    //   return new ErrorModel("登录失败");
    // } 
  }
};

module.exports = handleUserRouter;
