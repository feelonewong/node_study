const env = process.env.NODE_ENV;
let MYSQL_CONF ;

if (env === "dev") {
  MYSQL_CONF = {
    port: "3306",
    database: "myblog",
    user: "root",
    password: "123456",
    host: "localhost",
  };
} else if (env === "production") {
  MYSQL_CONF = {
    port: "3306",
    database: "myblog",
    user: "root",
    password: "123456",
    host: "localhost",
  };
}

module.exports = {
  MYSQL_CONF,
};
