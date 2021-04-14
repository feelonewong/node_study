const http = require("http");
const PORT  = 8088;
const querystring = require("querystring");

const server = http.createServer( (req, res)=>{
    const {url} = req;
    req.query  = querystring.parse( url.split("?")[1] )

    res.writeHeader(200, { "Content-type":"text/html;charset=utf-8" })
    res.end(JSON.stringify(req.query));
} )


server.listen( PORT, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`http://localhost:${PORT}`);
    }
} )