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

  //解析cookie
  req.cookie = {}
  const cookieStr = req["headers"].cookie || "";
  cookieStr.split(";").forEach(element => {
    const key = element.split("=")[0].trim();
    const value = element.split("=")[1].trim();
    req.cookie[key] = value;
  });

  getPostData(req).then((postData) => {
    req.body = postData;
    const userData = handleUserRouter(req, res);
    if (userData) {
      userData.then( (response)=>{
        res.end(JSON.stringify(response));
      })
      return;
    }
    const blogData = handleBlogRouter(req, res);
    
    if (blogData) {
      blogData.then((response) => {
        res.end(JSON.stringify(response));
      });
      return ;
    }

    //处理未找到路由的接口
    res.writeHead(404, { "Content-type": "text/plain;charset=utf-8" });
    res.write("404 NOT FOUND");
    res.end();
  });
};

module.exports = serverHandle;
