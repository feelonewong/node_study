const mySql  = require("mysql");
let { MYSQL_CONF }  = require("../conf/db");


const con = mySql.createConnection(MYSQL_CONF)

con.connect();
function exec (sql){
    return new Promise( (resolve, reject)=>{
        con.query( sql, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve( result);
            
        } )
    })      
}

module.exports = {
    exec
}


// con.end();