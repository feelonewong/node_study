const { exec } = require("../db/mysql");
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author=${author}`;
  }
  if (keyword) {
    sql += `and title like  '%${keyword}%' `;
  }
  sql += "order by createtime desc;";
  return exec(sql);
};

const getDetail = (id) => {
  let sql = `select * from blogs where id ='${id}';`;
  return exec(sql);
};

const newBlog = (blogData = {}) => {
 
  //console.log("blogData", blogData);
  let { title, content, author } = blogData;
  blogData.createtime = Date.now();
  let sql = `
      insert into blogs ( title,content, author, createtime) 
                  values ('${title}','${content}','${author}','${blogData.createtime }'); `;
  return exec(sql);
};

const updateBlog = (id, blogData = {}) => {
  let { title, content, author } = blogData;
  blogData.createtime = Date.now();
  let sql = `
      update blogs  set title='${title}', content='${content}'
      where id = ${id};
      `;
  return exec(sql);
};

const delBlog = (author, id) => {
  let sql = `delete from blogs where id ='${id}' and author= '${author}';`
  return exec(sql);
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
